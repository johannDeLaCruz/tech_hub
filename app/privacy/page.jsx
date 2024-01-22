import Link from "next/link";
const PrivacyPolicy = () => {
  return (
    <div class="container mx-auto p-8 max-w-3xl">
      <h1 className="font-heading text-h1 mb-8">
        <span>Privacy</span>
        <span className="text-primary-500">Policy</span>
      </h1>
      <section class="mb-8">
        <h2 class="text-h4 mb-4">Information We Collect</h2>
        <ul>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            When you use our services, we may collect personal information you
            provide us such as your name, email address.
          </li>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            We automatically collect information that your browser sends
            whenever you visit our website. This may include your IP address,
            time spent on our pages and number of login attempts.
          </li>
        </ul>
      </section>
      <section class="mb-8">
        <h2 class="text-h4 mb-4">How We Use Your Information</h2>
        <ul>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            We use your provided personal information to provide and maintain
            our services, authenticate users, and send important notifications.
          </li>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            We analyze how users interact with our website to improve and
            personalize their experience. This may involve the use of cookies
            and similar technologies.
          </li>
        </ul>
      </section>
      <section class="mb-8">
        <h2 class="text-h4 mb-4">Cookies</h2>
        <ul>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            We use cookies and similar technologies to provide login services.
            You can control the use of cookies through your browser settings.
          </li>
        </ul>
      </section>
      <section class="mb-8">
        <h2 class="text-h4 mb-4">Security</h2>
        <ul>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            We implement security measures such as 0Auth and password encryption
            to protect your personal information.
          </li>
        </ul>
      </section>
      <section class="mb-8">
        <h2 class="text-h4 mb-4">Contact Us</h2>
        <ul>
          <li class="list-disc marker:text-primary-500 text-body1 mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <strong>
              <Link href="mailto:johann.de.la.cruz2023@gmail.com">
                johann.de.la.cruz2023@gmail.com
              </Link>
            </strong>{" "}
            By using our website and services, you consent to the terms outlined
            in this Privacy Policy. Thank you for trusting TechHub!
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
