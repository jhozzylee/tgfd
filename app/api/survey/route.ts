import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, answers } = await request.json();

    if (!email || !answers) {
      return NextResponse.json(
        { success: false, message: "Missing survey information." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("Google Sheets URL is not configured.");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, answers }),
      redirect: "follow",
      cache: "no-store",
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Submission failed.");
    }

    return NextResponse.json({
      success: true,
      message: "Your response has been submitted.",
    });

  } catch (error) {
    console.error("Survey submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "We couldn't submit your response. Please try again.",
      },
      { status: 500 }
    );
  }
}