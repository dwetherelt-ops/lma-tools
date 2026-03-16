"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { completeOnboarding, type OnboardingData } from "../actions/onboarding";
import { StepWelcome } from "./steps/StepWelcome";
import { StepBasicProfile } from "./steps/StepBasicProfile";
import { StepNeuroProfile } from "./steps/StepNeuroProfile";
import { StepPatterns } from "./steps/StepPatterns";
import { StepPrivacy } from "./steps/StepPrivacy";

const TOTAL_STEPS = 5;

const stepLabels = [
  "Welcome",
  "Basic Profile",
  "Neuro Profile",
  "Patterns",
  "Privacy",
];

export function OnboardingWizard({ userEmail }: { userEmail: string }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<OnboardingData>({
    displayName: "",
    identityMode: "pseudonym",
    bio: "",
    locationGeneral: "",
    neurotype: "",
    diagnosisStatus: "",
    burnoutLevel: 0,
    strengths: [],
    challenges: [],
    supportNeeds: [],
    interests: [],
    sensoryNotes: "",
    visibilityLevel: "members_only",
    showLocation: true,
    showNeurotype: true,
    allowPrivateMessages: true,
  });

  function updateFormData(updates: Partial<OnboardingData>) {
    setFormData((prev) => ({ ...prev, ...updates }));
  }

  function nextStep() {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1);
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  }

  async function handleComplete() {
    setSubmitting(true);
    setError(null);

    const result = await completeOnboarding(formData);

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-navy-500 mb-2">
            <span>
              Step {currentStep} of {TOTAL_STEPS}
            </span>
            <span>{stepLabels[currentStep - 1]}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-navy-100">
            <div
              className="h-1.5 rounded-full bg-teal-600 transition-all duration-300"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
          {currentStep === 1 && <StepWelcome userEmail={userEmail} />}
          {currentStep === 2 && (
            <StepBasicProfile data={formData} onChange={updateFormData} />
          )}
          {currentStep === 3 && (
            <StepNeuroProfile data={formData} onChange={updateFormData} />
          )}
          {currentStep === 4 && (
            <StepPatterns data={formData} onChange={updateFormData} />
          )}
          {currentStep === 5 && (
            <StepPrivacy data={formData} onChange={updateFormData} />
          )}

          {error && (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={prevStep}
                className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
              >
                &larr; Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < TOTAL_STEPS ? (
              <button
                onClick={nextStep}
                disabled={currentStep === 2 && !formData.displayName.trim()}
                className="rounded-md bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleComplete}
                disabled={submitting}
                className="rounded-md bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Setting up..." : "Complete setup"}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
