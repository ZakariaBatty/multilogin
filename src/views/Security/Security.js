import React from 'react';
import './Security.css';

const Security = () => {
  return (
    <>
      {/* <!-- START HERO --> */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <h1 className="security-headline mt-3 mb-5">Born to be secure</h1>
            <div className="col-md">
              <h4>Robust Security and data encryption</h4>
              <p className="mb-3 text-muted">
                Sendwin is developed with security in mind from the beginning.
                We know handling your sessions comes with great responsibility,
                and this drives all of our decisions. We would like to provide
                full transparency so please review the following page which
                contains answers to the most important security questions.
              </p>

              <h4>What is behind Sendwin?</h4>
              <p className="mb-3 text-muted">
                Sendwin has three main components: a server which performs
                administrative tasks, a data store which holds user data and a
                browser extension.
              </p>

              <h4>Where does Sendwin operate?</h4>
              <p className="text-muted">
                We decided not to build our own infrastructure, instead we rely
                on third-party cloud providers, having limitless resources to
                ensure a rock solid and secure platform. Before we choose a
                cloud provider we check if their privacy and security guidelines
                and certifications meet our requirements.
              </p>
              <p className="text-muted">
                Our servers run on Aws and they are located in the United
                States. You can review AWS security policy{' '}
                <a href target="_blank">
                  here
                </a>
                .
              </p>
              <p className="text-muted">
                Our data store is in Google Cloud and it is located in the
                United States. You can review Google Cloud's security policy{' '}
                <a href target="_blank">
                  here
                </a>
                .
              </p>
              <p className="mb-3 text-muted">
                Our extension is running on your computer connected to our
                secure server.
              </p>

              <h4>Where is my data stored?</h4>
              <p className="mb-3 text-muted">
                Sendwin supports three types of sessions: local, synced and
                temporary. Each type is stored in a different place, but all of
                them are encrypted in a way that only the locally stored keys
                are able to decrypt them. Local sessions are stored in your
                browser's indexed db storage. Synced sessions are stored in our
                data store. Temporary sessions are not persisted at all.
              </p>

              <h4>What sensitive data does Sendwin store?</h4>
              <p className="mb-3 text-muted">
                We are storing two kinds of information when you use Sendwin. We
                are storing metadata for your sessions which contains the
                following information: your session's color, icon, launch url,
                group and some other technical details. In some cases we also
                store your session's cookies. Your session cookies are
                considered as extra sensitive data and handled by extra care
                (AES-256 for symmetric operations and RSA 2048 bit for
                asymmetric operations).
              </p>

              <h4>How are my sessions protected?</h4>
              <p className="text-muted">
                The extra sensitive parts of your sessions are encrypted and
                decrypted on your device. We never send your cookies or other
                extra sensitive data to our servers without encryption. The keys
                which are required to decrypt your data are available only on
                your device and never sent to our servers or data stores.
              </p>
              <p className="text-muted">
                We always use open-source cryptographic libraries and standard
                algorithms (AES-256 for symmetric operations and RSA 2048 bit
                for asymmetric operations). We never write our own cryptographic
                code or modify existing libraries.
              </p>
              <p className="mb-3 text-muted">
                Our components are always communicating through secure
                connections via Google cloud infrastructure.
              </p>

              <h4>Can Sendwin developers access my sessions?</h4>
              <p className="mb-3 text-muted">
                No, they can't. Your session cookies are encrypted and cannot be
                decrypted without knowing your secret key. Your secret key
                resides on your computer and is never sent to us.
              </p>

              <h4>Are my local sessions protected?</h4>
              <p className="mb-3 text-muted">
                We are using the same encryption mechanism for local sessions
                and synced sessions. If you log out from Sendwin your sessions
                cannot be decrypted until you log in again, even if someone has
                direct access to your computer.
              </p>

              <h4>What if I use Sendwin in Guest mode?</h4>
              <p className="mb-3 text-muted">
                We are using the same encryption mechanism when you use Sendwin
                in Guest mode. However, someone, who has direct access to your
                browser could log you in and access your sessions. We recommend
                creating an account to password protect your extension. You can
                enable the "Turn off sync by default" option in the options
                menu, and use your extension like in Guest mode.
              </p>

              <h4>What can I do to secure my sessions?</h4>
              <p className="mb-3 text-muted">
                To ensure the security of your sessions, create a Sendwin
                account. Choose a strong password and keep your password a
                secret.
              </p>

              <h4>What other data does Sendwin log?</h4>
              <p className="text-muted">
                Like other applications, we are logging some non-identifying
                usage data. This data is handled by Google Analytics, and it
                doesn't contain any sensitive information and it is anonymous.
              </p>
              <p className="mb-3 text-muted">
                If some error happens we create crash logs. We use these crash
                logs to stabilize our application and proactively fix possible
                problems. All sensitive data is filtered from these logs at
                device level and no sensitive data is sent.
              </p>
            </div>
          </div>
          <hr className="hr-line" />
        </div>
      </section>
      {/* <!-- END SUBSCRIBE --> */}
    </>
  );
};

export default Security;
