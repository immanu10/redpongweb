import { Metadata } from "next";

const title = "Red Pong | Privacy Policy";

export const metadata: Metadata = {
  title,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl min-h-screen mx-auto flex flex-col">
      <header className="border-b w-full  bg-background">
        <div className="flex items-center py-4 px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://immanu10.github.io/redpongweb/icon.png"
            width={80}
            height={80}
            alt="red pong logo"
            className="rounded-full"
          />
        </div>
      </header>
      <main className="w-full flex flex-col px-4 py-6">
        <h2 className="font-semibold text-xl my-2">Privacy Policy</h2>
        <p className="">
          This policy is effective as of{" "}
          <span className="font-medium">01 June 2024</span>.
        </p>
        <p className="my-3">
          Welcome to
          <span className="font-medium text-muted-foreground"> Red Pong. </span>
          Thank you for your interest in Red Pong. This privacy policy applies
          to the Red Pong Game/App for mobile devices, created by Manoj Kumar M
          as a Paid Game, and published on google play. This service is intended
          for use as is.
        </p>
        <h3 className="font-semibold text-lg my-2">
          Information Collection and Use
        </h3>
        <p className="my-2">
          I do not collect, store, or share any personal data from its users and
          this game is purely created for learning/hobby purpose, and I made Red
          Pong as a paid game to help fuel the development costs.
        </p>
        <p>
          Please note that the Application utilizes third-party services that
          have their own Privacy Policy about handling data. Below are the links
          to the Privacy Policy of the third-party service providers used by the
          Application:
        </p>

        <ul className="my-2">
          <li>
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              - Google Play Services
            </a>
          </li>
          <li>
            <a
              href="https://expo.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              - Expo
            </a>
          </li>
        </ul>
        <h3 className="font-semibold text-lg my-2">Children&apos;s Privacy</h3>
        <p className="my-2">
          My Application do not address children under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13. If you are a parent or guardian and you are aware that your
          child has provided me with personal information, please contact us so
          that i can take necessary actions.
        </p>

        <h3 className="font-semibold text-lg my-2">Changes to This Policy</h3>
        <p className="my-2">
          I may update this Privacy Policy from time to time. I will notify you
          of any changes by posting the new policy on this page and updating the
          effective date.
        </p>
        <h3 className="font-semibold text-lg my-2">Contact Us</h3>
        <p className="my-2">
          If you have any questions regarding privacy while using the
          Application, or have questions about the practices, please contact the
          me via email at manoj10kumarm+redpong@gmail.com.
        </p>

        <p>This privacy policy page was created with the help of:</p>
        <a
          href="https://app-privacy-policy-generator.nisrulz.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          App Privacy Policy Generator
        </a>
      </main>
    </div>
  );
}
