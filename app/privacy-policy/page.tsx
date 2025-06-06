import React from 'react';
import Header from "components/Header";

const PrivacyPolicy: React.FC = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6,
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '20px',
  };

  const dateStyle = {
    textAlign: 'center',
    fontSize: '0.9em',
    marginBottom: '20px',
  };

  const sectionHeadingStyle = {
    textAlign: 'center',
    fontSize: '1.8em',
    marginBottom: '10px',
  };

  const sectionStyle = {
    marginBottom: '30px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    textAlign: 'left', // Keep paragraphs left-aligned
  };

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '15px',
    textAlign: 'left', // Keep lists left-aligned
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'underline',
  };

  const consentStyle = {
    fontWeight: 'bold',
    marginTop: '20px',
    textAlign: 'left', // Keep consent statement left-aligned
  };
 
  return (
    
    <div style={containerStyle}>
     <Header />
      <main role="main">
        <h1 style={titleStyle}>Privacy Policy for B'nspirer</h1>
        <p style={dateStyle}><strong>Effective Date: June 05, 2025</strong></p>
        <p style={paragraphStyle}>
          This Privacy Policy explains how "B'nspirer" ("the App") collects, uses, and protects your information when you use our mobile application. "B'nspirer" uses the OpenAI API to generate business ideas based on the text inputs you provide.
        </p>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>1. Information Collection</h2>
          <p style={paragraphStyle}>We collect the following information when you use "B'nspirer":</p>
          <ul style={listStyle}>
            <li><strong>Text Inputs</strong>: Any information you type into the App to generate business ideas. This may include personal details if you choose to include them.</li>
            <li><strong>Device Information</strong>: Basic details like your device model, operating system version, and the app version you’re using.</li>
            <li><strong>Usage Data</strong>: General information about how you interact with the App, such as when you open it or how you use its features, collected for analytics purposes.</li>
          </ul>
          <p style={paragraphStyle}>We don’t collect sensitive information (like financial or health data) unless you voluntarily add it to your text inputs.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>2. Use of Information</h2>
          <p style={paragraphStyle}>We use your information to:</p>
          <ul style={listStyle}>
            <li>Send your text inputs to the OpenAI API to create business ideas for you.</li>
            <li>Analyze usage data to improve "B'nspirer" and enhance your experience.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>3. Data Sharing</h2>
          <p style={paragraphStyle}>
            Your text inputs are shared with OpenAI to make the App work. You can learn more about how OpenAI handles your data by checking their privacy policy at <a href="https://openai.com/privacy" style={linkStyle}>https://openai.com/privacy</a>.
          </p>
          <p style={paragraphStyle}>
            We don’t share your information with anyone else unless it’s required to provide the service or comply with legal obligations.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>4. Data Storage and Security</h2>
          <p style={paragraphStyle}>
            Your text inputs aren’t stored by "B'nspirer" on our servers. They’re only processed temporarily to get a response from the OpenAI API and are not kept afterward.
          </p>
          <p style={paragraphStyle}>
            Usage data is anonymized and stored securely.
          </p>
          <p style={paragraphStyle}>
            We take steps to keep your information safe, but no system is 100% secure, so we can’t promise absolute protection.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>5. User Rights</h2>
          <p style={paragraphStyle}>
            You can ask to see, correct, or delete your data. Since "B'nspirer" doesn’t keep your text inputs, there may not be much data for us to provide or delete.
          </p>
          <p style={paragraphStyle}>
            For data shared with OpenAI, check their privacy policy to understand your options.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>6. GDPR Compliance</h2>
          <p style={paragraphStyle}>
            If you live in the European Economic Area (EEA), the General Data Protection Regulation (GDPR) gives you extra rights, such as:
          </p>
          <ul style={listStyle}>
            <li>Accessing, correcting, deleting, or limiting how your data is used.</li>
            <li>Moving your data elsewhere (data portability).</li>
          </ul>
          <p style={paragraphStyle}>
            We process your data based on your consent, which you give by using "B'nspirer." To use these rights, reach out to us at <a href="tel:7722037106" style={linkStyle}>772-203-7106</a>.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>7. International Data Transfers</h2>
          <p style={paragraphStyle}>
            Your information might be sent to countries outside your home country, like the United States, where data laws may differ.
          </p>
          <p style={paragraphStyle}>
            We make sure these transfers follow data protection rules, using tools like Standard Contractual Clauses when needed.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>8. Children’s Privacy</h2>
          <p style={paragraphStyle}>
            "B'nspirer" isn’t designed for kids under 13. We don’t knowingly collect their information. If you think a child under 13 has used the App, contact us to have their data removed.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>9. Changes to the Policy</h2>
          <p style={paragraphStyle}>
            We might update this Privacy Policy occasionally. If there are big changes, we’ll let you know by updating this page.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>10. Contact Information</h2>
          <p style={paragraphStyle}>
            Have questions or concerns? Call us at <a href="tel:7722037106" style={linkStyle}>772-203-7106</a>.
          </p>
        </section>

        <p style={{ ...paragraphStyle, ...consentStyle }}>
          By using "B'nspirer," you agree to how we collect and use your information as described here.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;