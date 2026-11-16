"use client";

import { useMemo, useState } from "react";
import Button from "./ui/Button";
import Link from "next/link";

type Answers = {
  country: string;
  travelStyle: string;
  businessOwner: string;
  businessDestinations: string;
  annualTrips: string;
  travelBudget: string;
  favouriteDestinations: string;
  travelBarriers: string[];
  safetyConsideration: string;
  cancelledTrips: string;
  uneasyMoment: string;
  currentSafetyMeasures: string;
  emergencyFeatures: string;
  locationSharing: string;
  mostImportantFeature: string;
  otherFeaturePriorities: string[];
  serviceLikelihood: string;
  coordinationValue: string;
  paymentPreference: string;
  expectedPrice: string;
  trustFactors: string;
};

const initialAnswers: Answers = {
  country: "",
  travelStyle: "",
  businessOwner: "",
  businessDestinations: "",
  annualTrips: "",
  travelBudget: "",
  favouriteDestinations: "",
  travelBarriers: [
    "Not having someone to go with",
    "Privacy concerns",
    "Safety concerns",
  ],
  safetyConsideration: "",
  cancelledTrips: "",
  uneasyMoment: "",
  currentSafetyMeasures: "",
  emergencyFeatures: "",
  locationSharing: "",
  mostImportantFeature: "",
  otherFeaturePriorities: [
    "Complete discretion, privacy with little or controlled digital footprint.",
    "Real-time check-ins and emergency support.",
    "Thoroughly vetted local guides, drivers, concierge, and accommodation in advance.",
  ],
  serviceLikelihood: "",
  coordinationValue: "",
  paymentPreference: "",
  expectedPrice: "",
  trustFactors: "",
};

const sections = [
  {
    title: "About You",
    description: "Let's get to know you and your travel habits.",
  },
  {
    title: "Your Travel Concerns",
    description: "Tell us about the things that influence your travel decisions.",
  },
  {
    title: "Current Safety Habits",
    description: "We'd like to understand how you currently stay safe.",
  },
  {
    title: "What Would Make You Feel Safer?",
    description: "Help us understand what matters most to you.",
  },
  {
    title: "Membership & Pricing",
    description: "A few final questions about your expectations.",
  },
];

const featureOptions = [
  "Complete discretion, privacy with little or controlled digital footprint.",
  "Real-time check-ins and emergency support.",
  "Thoroughly vetted local guides, drivers, concierge, and accommodation in advance.",
];

function Question({
  number,
  title,
  required = true,
  children,
}: {
  number: number;
  title: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <span className="font-body text-sm font-medium leading-6 text-[#3A2A12] sm:text-base block">
        <span className="mr-2 font-semibold text-[#C7A86E]">{number}.</span>
        {title}
        {required && <span className="ml-1 text-[#B8985D]">*</span>}
      </span>
      {children}
    </div>
  );
}

function TextField({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-[#E4DED3] bg-white px-4 py-3.5 font-body text-sm text-[#3A2A12] outline-none transition focus:border-[#C7A86E] focus:ring-1 focus:ring-[#C7A86E]/20"
    />
  );
}

function RadioOptions({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      {options.map((option) => (
        <label
          key={option}
          className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all ${
            value === option
              ? "border-[#C7A86E] bg-[#C7A86E]/10 shadow-sm"
              : "border-[#E4DED3] bg-white hover:border-[#C7A86E]/50"
          }`}
        >
          <input
            type="radio"
            checked={value === option}
            onChange={() => onChange(option)}
            className="mt-1 accent-[#C7A86E]"
          />
          <span className="font-body text-sm leading-5 text-[#3A2A12]">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}

function CheckboxOptions({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}) {
  function toggle(option: string) {
    onChange(
      value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option]
    );
  }

  return (
    <div className="space-y-2.5">
      {options.map((option) => (
        <label
          key={option}
          className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all ${
            value.includes(option)
              ? "border-[#C7A86E] bg-[#C7A86E]/10 shadow-sm"
              : "border-[#E4DED3] bg-white hover:border-[#C7A86E]/50"
          }`}
        >
          <input
            type="checkbox"
            checked={value.includes(option)}
            onChange={() => toggle(option)}
            className="mt-1 accent-[#C7A86E]"
          />
          <span className="font-body text-sm leading-5 text-[#3A2A12]">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}

function Ranking({
  items,
  onChange,
}: {
  items: string[];
  onChange: (items: string[]) => void;
}) {
  function move(index: number, direction: -1 | 1) {
    const next = [...items];
    const target = index + direction;

    if (target < 0 || target >= next.length) return;

    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  return (
    <div className="space-y-3">
      <p className="font-body text-xs leading-5 text-[#806F57]">
        Arrange these options from most important to least important using the
        arrows.
      </p>

      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-[#E4DED3] bg-white p-3.5"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF7FE] font-body text-xs font-semibold text-[#3A2A12]">
            {index + 1}
          </span>

          <span className="flex-1 font-body text-sm leading-5 text-[#3A2A12]">
            {item}
          </span>

          <div className="flex flex-col gap-0.5">
            <button
              type="button"
              aria-label="Move up"
              disabled={index === 0}
              onClick={() => move(index, -1)}
              className="rounded p-1 text-[#806F57] hover:bg-[#EAF7FE] disabled:opacity-25"
            >
              ▲
            </button>
            <button
              type="button"
              aria-label="Move down"
              disabled={index === items.length - 1}
              onClick={() => move(index, 1)}
              className="rounded p-1 text-[#806F57] hover:bg-[#EAF7FE] disabled:opacity-25"
            >
              ▼
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SurveyPage() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const progress = ((step + 1) / sections.length) * 100;

  function update<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  const remainingFeatures = useMemo(
    () =>
        answers.otherFeaturePriorities.filter(
            (feature) => feature !== answers.mostImportantFeature
        ),
        [answers.otherFeaturePriorities, answers.mostImportantFeature]
    );

  function validateStep() {
    if (step === 0) {
     if (!name.trim()) {
        return "Please enter your name.";
    }

      if (
        !answers.country ||
        !answers.travelStyle ||
        !answers.businessOwner ||
        (answers.businessOwner === "Yes" &&
          !answers.businessDestinations.trim()) ||
        !answers.annualTrips ||
        !answers.travelBudget ||
        !answers.favouriteDestinations.trim()
      ) {
        return "Please answer all required questions before continuing.";
      }

      const destinations = answers.favouriteDestinations
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      if (destinations.length > 3) {
        return "Please enter no more than three favourite destinations.";
      }
    }

    if (step === 1) {
      if (
        !answers.travelBarriers.length ||
        !answers.safetyConsideration ||
        !answers.cancelledTrips ||
        !answers.uneasyMoment
      ) {
        return "Please answer all required questions before continuing.";
      }
    }

    if (step === 2) {
      if (
        !answers.currentSafetyMeasures ||
        !answers.emergencyFeatures.length ||
        !answers.locationSharing
      ) {
        return "Please answer all required questions before continuing.";
      }
    }

    if (step === 3) {
      if (
        !answers.mostImportantFeature ||
        remainingFeatures.length !== 2 ||
        !answers.serviceLikelihood ||
        !answers.coordinationValue
    ) {
        return "Please answer all required questions before continuing.";
      }
    }

    if (step === 4) {
      if (
        !answers.paymentPreference ||
        !answers.expectedPrice ||
        !answers.trustFactors
      ) {
        return "Please answer all required questions before submitting.";
      }
      if (
        email.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
        return "Please enter a valid email address.";
    }
    }

    return "";
  }

  function nextStep() {
    const validationError = validateStep();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStep((current) => Math.min(current + 1, sections.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitSurvey() {
    const validationError = validateStep();

    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            answers: {
                ...answers,
                otherFeaturePriorities: remainingFeatures,
            },
        }),

      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EAF7FE] px-5 py-20">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C7A86E] text-2xl text-[#EAF7FE]">
            ✓
          </div>

          <h1 className="font-heading text-3xl text-[#3A2A12] sm:text-4xl">
            Thank You {name.trim() ? `, ${name.trim()}` : ""}!
          </h1>

          <p className="mt-4 font-body text-sm leading-7 text-[#3A2A12]">
            Your responses have been submitted successfully. Thank you for
            helping us shape a better and safer travel experience.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" aria-label="Go to homepage" className="flex items-center">
            <Button href="/" variant="primary">
            Back to Home
            </Button>
            </Link>
            
            <Button
            href="https://www.instagram.com/__tgfd?dlrf=ZG5rNGpzYWZzMWd0&utm_source=qr"
            variant="secondary"
            className="border-[#EAF7FE]/40 text-[#EAF7FE] hover:border-[#EAF7FE] hover:bg-[#EAF7FE]/10"
            >
              Follow on Instagram
            </Button>
            </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EAF7FE] px-5 pb-20 pt-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B8985D]">
            TGFD
          </p>

          <h1 className="font-heading text-2xl leading-tight text-[#3A2A12] sm:text-4xl">
            Shape the Future of Travel
          </h1>

          <p className="mx-auto mt-3 max-w-lg font-body text-xs leading-6 text-[#806F57] sm:text-sm">
            We would love to understand your travel profile, how you imagine safety on a trip and prepare for emergencies. Responses to this survey are completely voluntary.
          </p>
        </div>

        {/* Progress Card */}
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#3A2A12]">
              {sections[step].title}
            </span>

            <span className="font-body text-xs text-[#806F57]">
              Step {step + 1} of {sections.length}
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-[#EAE5DC]">
            <div
              className="h-full rounded-full bg-[#C7A86E] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Content Form Card */}
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          {step === 0 && (
            <>
              <Question number={1} title="What can we call you?">
                <TextField
                  type="text"
                  value={name}
                  onChange={setName}
                  placeholder="Enter your name"
                />
              </Question>

              <Question
                number={2}
                title="What country do you currently reside in?"
              >
                <TextField
                  value={answers.country}
                  onChange={(value) => update("country", value)}
                  placeholder="Enter your country"
                />
              </Question>

              <Question
                number={3}
                title="How would you describe your typical travel style?"
              >
                <RadioOptions
                  value={answers.travelStyle}
                  onChange={(value) => update("travelStyle", value)}
                  options={[
                    "Solo and confident",
                    "Usually with a partner, friend(s) or family",
                    "With a dedicated staff or protection",
                  ]}
                />
              </Question>

              <Question
                number={4}
                title="Do you own or run a business that requires you to travel abroad?"
              >
                <RadioOptions
                  value={answers.businessOwner}
                  onChange={(value) => update("businessOwner", value)}
                  options={["Yes", "No"]}
                />
              </Question>

              {answers.businessOwner === "Yes" && (
                <Question
                  number={5}
                  title="If yes, what countries do you frequently travel to for business?"
                >
                  <TextField
                    value={answers.businessDestinations}
                    onChange={(value) =>
                      update("businessDestinations", value)
                    }
                    placeholder="Enter countries"
                  />
                </Question>
              )}

              <Question
                number={6}
                title="On average, how many trips do you take per year for leisure and/or business purposes?"
              >
                <RadioOptions
                  value={answers.annualTrips}
                  onChange={(value) => update("annualTrips", value)}
                  options={["0-3", "3-6", "7 and above"]}
                />
              </Question>

              <Question
                number={7}
                title="What is your average travel budget for a 4-day trip? Including flights"
              >
                <RadioOptions
                  value={answers.travelBudget}
                  onChange={(value) => update("travelBudget", value)}
                  options={[
                    "Under £500 pp",
                    "£500 - £1,000 pp",
                    "£1,000 - £3,000 pp",
                  ]}
                />
              </Question>

              <Question
                number={8}
                title="What are your favourite countries and cities to visit? You can list up to 3, including aspirational destinations."
              >
                <TextField
                  value={answers.favouriteDestinations}
                  onChange={(value) =>
                    update("favouriteDestinations", value)
                  }
                  placeholder="e.g. Paris, France, Tokyo, Japan, Cape Town"
                />
                <p className="font-body text-xs text-[#806F57]">
                  Separate destinations with commas. Maximum of three.
                </p>
              </Question>
            </>
          )}

          {step === 1 && (
            <>
              <Question
                number={9}
                title="What are the factors that may have stopped you from travelling in the past? Please arrange these according to importance to you."
              >
                <Ranking
                  items={answers.travelBarriers}
                  onChange={(value) => update("travelBarriers", value)}
                />
              </Question>

              <Question
                number={10}
                title="Is 'Safety' a factor you consider before or during a trip?"
              >
                <RadioOptions
                  value={answers.safetyConsideration}
                  onChange={(value) => update("safetyConsideration", value)}
                  options={[
                    "Yes - All the time and I never travel because of this.",
                    "Sometimes - Local events help me decide my next destination, or if I'll travel at all.",
                    "Yes - If I must/want to travel, I proceed but with the right safety precautions.",
                  ]}
                />
              </Question>

              <Question
                number={11}
                title="Have you ever cancelled, postponed, or avoided a trip specifically because of safety or security concerns?"
              >
                <RadioOptions
                  value={answers.cancelledTrips}
                  onChange={(value) => update("cancelledTrips", value)}
                  options={["Yes", "No"]}
                />
              </Question>

              <Question
                number={12}
                title="Which moment on a trip has made you feel most exposed or uneasy?"
              >
                <RadioOptions
                  value={answers.uneasyMoment}
                  onChange={(value) => update("uneasyMoment", value)}
                  options={[
                    "Arriving somewhere new alone",
                    "Realising no one would notice/help me if something went wrong",
                    "Being recognised or tracked",
                    "None of the above",
                  ]}
                />
              </Question>
            </>
          )}

          {step === 2 && (
            <>
              <Question
                number={13}
                title="What do you currently do to feel safe and secure when you travel?"
              >
                <RadioOptions
                  value={answers.currentSafetyMeasures}
                  onChange={(value) =>
                    update("currentSafetyMeasures", value)
                  }
                  options={[
                    "Nothing. I just hope for the best",
                    "I take some informal steps (e.g. sharing my location with a loved one, travel insurance, etc.)",
                    "I take dedicated measures (e.g. private drivers, researching/vetting local guides pre-trip, personal protection)",
                  ]}
                />
              </Question>

              <Question
                number={14}
                title="Which of these do you currently have in place, in the case of an emergency on a trip?"
              >
                <RadioOptions
                  value={answers.emergencyFeatures}
                  onChange={(value) => update("emergencyFeatures", value)}
                  options={[
                    "I use the satellite calling feature on my Apple Watch Ultra 3, Ultra 4 or my Google Pixel watch.",
                    "I use the satellite calling feature on my iPhone 17+, with another iPhone 17+ user.",
                    "I use the paired watch calling feature on my Apple Watch Ultra 2 & below, Samsung Watch Ultra2 & below, or any other Android watch.",
                    "I use my phone's location-sharing feature with a friend or partner, if together on the trip, using my mobile device.",
                    "I purchase a stand-alone plan for my watch whenever I'm in a new country, in case I lose my phone.",
                  ]}
                />
              </Question>

              <Question
                number={15}
                title="If you use any existing 'Share My Location' or emergency features on your device, how well do you use it?"
              >
                <RadioOptions
                  value={answers.locationSharing}
                  onChange={(value) => update("locationSharing", value)}
                  options={[
                    "I use these features regularly on all my trips.",
                    "I like my privacy and only consider these in extenuating circumstances, with friends and family.",
                    "I never use these features on a trip.",
                  ]}
                />
              </Question>
            </>
          )}

          {step === 3 && (
            <>
              <Question
                number={16}
                title="If your next trip included an added layer of safety and assurance, what would matter most to you?"
              >
                <RadioOptions
                  value={answers.mostImportantFeature}
                  onChange={(value) => {
                    update("mostImportantFeature", value);
                    update(
                      "otherFeaturePriorities",
                      featureOptions.filter((item) => item !== value)
                    );
                  }}
                  options={featureOptions}
                />
              </Question>

              <Question
                number={17}
                title="In 2nd & 3rd place, what else would matter to you? Please arrange according to importance."
              >
                {answers.mostImportantFeature ? (
                  <Ranking
                    items={remainingFeatures}
                    onChange={(value) =>
                      update("otherFeaturePriorities", value)
                    }
                  />
                ) : (
                  <p className="rounded-xl bg-[#EAF7FE] p-4 font-body text-sm text-[#806F57]">
                    Please answer the previous question first.
                  </p>
                )}
              </Question>

              <Question
                number={18}
                title="On a scale of 1 - 10, how likely are you to consider a personalised and discreet safety product or service, on your next trip?"
              >
                <RadioOptions
                  value={answers.serviceLikelihood}
                  onChange={(value) => update("serviceLikelihood", value)}
                  options={[
                    "1 - 4 (Not likely)",
                    "5 - 8 (I could try it out)",
                    "9 - 10 (I'll be very willing to use this)",
                  ]}
                />
              </Question>

              <Question
                number={19}
                title="How useful would 24/7 real-time co-ordination and escalation be during your trips?"
              >
                <RadioOptions
                  value={answers.coordinationValue}
                  onChange={(value) => update("coordinationValue", value)}
                  options={[
                    "Very important",
                    "Quite important",
                    "Not important",
                  ]}
                />
              </Question>
            </>
          )}

          {step === 4 && (
            <>
              <Question
                number={20}
                title="How would you prefer to pay for a service like this?"
              >
                <RadioOptions
                  value={answers.paymentPreference}
                  onChange={(value) => update("paymentPreference", value)}
                  options={[
                    "Per trip",
                    "Monthly, Quarterly or Annual club member",
                    "According to my projected travel frequency at any given time, i.e. Flexible plans/options",
                  ]}
                />
              </Question>

              <Question
                number={21}
                title="Realistically, what would you expect to pay for this kind of service per trip?"
              >
                <RadioOptions
                  value={answers.expectedPrice}
                  onChange={(value) => update("expectedPrice", value)}
                  options={["Under £50", "£50-£100", "£100+"]}
                />
              </Question>

              <Question
                number={22}
                title="What would make you trust a company with something this personal?"
              >
                <RadioOptions
                  value={answers.trustFactors}
                  onChange={(value) => update("trustFactors", value)}
                  options={[
                    "Referrals from people you know",
                    "Verifiable guarantees (credible insurance, verified and public staff, etc.)",
                    "A proven track record & reviews from other club members.",
                  ]}
                />
              </Question>

              <Question
              number={23}
              title="Enter your email address to join club TGFD on launch day"
              required={false}
              >
                <TextField
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email address (optional)"
                />
            </Question>
            </>
          )}

          {error && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 p-3.5 font-body text-xs text-red-700"
            >
              {error}
            </p>
          )}

          {/* Sleeker, Balanced Footer Buttons */}
          <div className="flex items-center justify-between gap-4 border-t border-[#EAE5DC] pt-5">
            <button
              type="button"
              onClick={previousStep}
              disabled={step === 0 || submitting}
              className="rounded-xl border border-[#C7A86E] px-5 py-2 font-body text-xs font-semibold tracking-tight text-[#3A2A12] transition hover:bg-[#C7A86E]/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Prev
            </button>

            {step < sections.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-xl bg-[#C7A86E] px-6 py-2 font-body text-xs font-semibold tracking-tight text-white transition hover:bg-[#B8985D]"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={submitSurvey}
                disabled={submitting}
                className="rounded-xl bg-[#C7A86E] px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#B8985D] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Survey"}
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center font-body text-xs text-[#806F57]">
          Contact email: Enquiries@tgfdestinations.com
        </p>
      </div>
    </main>
  );
}