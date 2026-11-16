
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, answers } = await request.json();

    if (!name?.trim() || !answers) {
      return NextResponse.json(
        { success: false, message: "Missing required information." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("Google Sheets is not configured.");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email: email || "",
        answers,
      }),
      cache: "no-store",
      redirect: "follow",
    });

    const responseText = await response.text();

let result;

try {
  result = JSON.parse(responseText);
} catch {
  console.error("Google Apps Script returned:", {
    status: response.status,
    url: response.url,
    contentType: response.headers.get("content-type"),
    response: responseText.slice(0, 500),
  });

  throw new Error("Google Apps Script returned HTML instead of JSON.");
}

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Google Sheets submission failed.");
    }

    return NextResponse.json({
      success: true,
      message: "Survey submitted successfully.",
    });

  } catch (error) {
    console.error("Survey submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your response. Please try again.",
      },
      { status: 500 }
    );
  }
}
