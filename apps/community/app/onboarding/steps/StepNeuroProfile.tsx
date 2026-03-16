import type { OnboardingData } from "../../actions/onboarding";

interface Props {
  data: OnboardingData;
  onChange: (updates: Partial<OnboardingData>) => void;
}

const neurotypes = [
  "ADHD",
  "Autistic",
  "AuDHD (ADHD + Autism)",
  "Dyslexic",
  "Dyspraxic",
  "Tourette's / Tic disorder",
  "Multiple / Other",
  "Exploring / Not sure yet",
];

const diagnosisOptions = [
  "Formally diagnosed",
  "Self-identified",
  "Currently being assessed",
  "Exploring the possibility",
  "Prefer not to say",
];

export function StepNeuroProfile({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-navy-900">
        Your neuro profile
      </h2>
      <p className="mt-1 text-sm text-navy-500">
        This helps us personalise your experience. All fields are optional.
      </p>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="neurotype"
            className="text-sm font-medium text-navy-900"
          >
            How do you identify?
          </label>
          <select
            id="neurotype"
            value={data.neurotype}
            onChange={(e) => onChange({ neurotype: e.target.value })}
            className="flex h-10 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          >
            <option value="">Select if you&apos;d like to</option>
            {neurotypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="diagnosisStatus"
            className="text-sm font-medium text-navy-900"
          >
            Diagnosis status
          </label>
          <select
            id="diagnosisStatus"
            value={data.diagnosisStatus}
            onChange={(e) => onChange({ diagnosisStatus: e.target.value })}
            className="flex h-10 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          >
            <option value="">Select if you&apos;d like to</option>
            {diagnosisOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="text-xs text-navy-400">
            All are welcome here — diagnosis is not a requirement for belonging.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-navy-900">
            Current burnout level
          </label>
          <p className="text-xs text-navy-400">
            How are you doing right now? 1 = thriving, 10 = in crisis
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-navy-400 w-14">Thriving</span>
            <input
              type="range"
              min="0"
              max="10"
              value={data.burnoutLevel}
              onChange={(e) =>
                onChange({ burnoutLevel: parseInt(e.target.value) })
              }
              className="flex-1 accent-teal-600"
            />
            <span className="text-xs text-navy-400 w-14 text-right">In crisis</span>
          </div>
          {data.burnoutLevel > 0 && (
            <p className="text-center text-sm font-medium text-navy-700">
              {data.burnoutLevel}/10
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
