'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import Feedback from '@/components/ui/Feedback'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import Image from 'next/image'

const sections = [
    { id: 'privacy', name: 'Privacy' },
    { id: 'policy', name: 'Data Policy' },
    { id: 'terms', name: 'T&Cs' },
]

export default function Privacy() {
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            <Feedback />
            {/* INTRO */}
            <Section id="privacy" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-sm front-z text-center">
                    <h3 className="content-miniheading">PRIVACY</h3>
                    <h1 className="content-title mb-4">Our Privacy Policy</h1>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* PRIVACY POLICY */}
            <Section id="policy" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRIVACY</span> — DATA POLICY
                    </h3>
                    <h2 className="content-title text-6xl">How we use your data</h2>
                    <div className='mt-16 content-body text-base text-start section-container-sm bento-card flex flex-col gap-12'>
                        <span>Last updated: 18/08/25</span>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>PRIVACY POLICY</h3>
                            <p>
                                This Privacy Notice for Heimdall QC (&apos;<strong>we</strong>&apos;, &apos;<strong>us</strong>&apos;, or &apos;<strong>our</strong>&apos;), describes how and why we might access, collect, store, use, and/or share (&apos;<strong>process</strong>&apos;) your personal information when you use our services (&apos;<strong>Services</strong>&apos;), including when you:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Visit our website at <a className='text-link text-blue-400' href="https://www.heimdallqc.com">https://www.heimdallqc.com</a> or any website of ours that links to this Privacy Notice</li>
                                <li>Use Heimdall QC - Content Circuit Breaker. An automated end-to-end quality control service, which identifies and takes action on plagiarism and problematic content.</li>
                                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                            </ul>
                            <p>
                                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@heimdallqc.com
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>SUMMARY OF KEY POINTS</h3>
                            <p className='text-neutral-400 italic'>
                                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                            </p>
                            <p>
                                <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                            </p>
                            <p>
                                <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered &apos;special&apos; or &apos;sensitive&apos; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                            </p>
                            <p>
                                <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                            </p>
                            <p>
                                <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                                We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                            </p>
                            <p>
                                <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                            </p>
                            <p>
                                <strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
                            </p>
                            <p>
                                <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                            </p>
                            <p>
                                <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>1. WHAT INFORMATION DO WE COLLECT?</h3>
                            <strong>Personal information you disclose to us</strong>
                            <p className='italic'>
                                <strong>In Short</strong>: We collect personal information that you provide to us.
                            </p>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            </p>
                            <p>
                                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>names</li>
                                <li>phone numbers</li>
                                <li>email addresses</li>
                                <li>usernames</li>
                                <li>passwords</li>
                                <li>contact preferences</li>
                                <li>contact or authentication data</li>
                                <li>billing addresses</li>
                                <li>debit/credit card numbers</li>
                            </ul>
                            <p>
                                <strong>Sensitive Information.</strong> We do not process sensitive information.
                            </p>
                            <p>
                                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: <a className='text-link text-blue-400' href="https://stripe.com/gb/privacy">https://stripe.com/gb/privacy</a>.
                            </p>
                            <p>
                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                            </p>
                            <h3 className='content-subtitle'>Information automatically collected</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: Some information - such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                            </p>
                            <p>
                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                            </p>
                            <p>
                                The information we collect includes:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>
                                    <strong>Log and Usage Data</strong>. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &apos;crash dumps&apos;), and hardware settings).
                                </li>
                                <li>
                                    <strong>Device Data</strong>. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                            </p>
                            <strong>
                                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                            </strong>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li><strong>To facilitate account creation and authentication and otherwise manage user accounts</strong>. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                                <li><strong>To deliver and facilitate delivery of services to the user</strong>. We may process your information to provide you with the requested service.</li>
                                <li><strong>To respond to user inquiries/offer support to users</strong>. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                                <li><strong>To send administrative information to you</strong>. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                                <li><strong>To fulfil and manage your orders</strong>. We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</li>
                                <li><strong>To save or protect an individual&apos;s vital interest</strong>. We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.</li>
                                <li><strong>To verify user identity/prevent fraud</strong>. We may process your information to prevent unauthorised access.</li>
                                <li><strong>To maintain account security</strong>. We may process your information to monitor for suspicious activity and password resets.</li>
                                <li><strong>To provide customer support</strong>. We may process your information to access account details to help troubleshoot issues.</li>
                                <li><strong>To improve our service</strong>. We may process your information to analyse usage patterns to fix bugs and add features.</li>
                                <li><strong>To provide analytics</strong>. We may process your information to record activity of our service to show users how it is working.</li>
                                <li><strong>To personalise user experience</strong>. We may process your information to customise the interface, preferences and settings.</li>
                                <li><strong>To process payments/manage billing</strong>. We may process your information to handle subscriptions, purchases, invoices and payment failures.</li>
                                <li><strong>To send important service updates</strong>. We may process your information to send maintenance notifications, security and service alerts and policy changes.</li>
                                <li><strong>To comply with legal obligations</strong>. We may process your information to comply with tax records, data retention and law enforcement.</li>
                                <li><strong>To conduct surveys and gather feedback</strong>. We may process your information to improve our service based on user input.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.
                            </p>
                            <p>
                                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li><strong>Consent</strong>. We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</li>
                                <li><strong>Performance of a Contract</strong>. We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                                <li><strong>Legal Obligations</strong>. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                                <li><strong>Vital Interests</strong>. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We may share information in specific situations described in this section and/or with the following third parties.
                            </p>
                            <p>
                                <strong>Vendors, Consultants, and Other Third-Party Service Providers</strong>. We may share your data with third-party vendors, service providers, contractors, or agents (&apos;<strong>third parties</strong>&apos;) who perform services for us or on our behalf and require access to such information to do that work.
                                We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                            </p>
                            <p>
                                The third parties we may share personal information with are as follows:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li><strong>Web Performance and Security</strong></li>
                            </ul>
                            <p className='ml-8'>
                                Cloudflare - for content delivery, security, and performance optimization.
                                <br/>
                                <br/>
                                Privacy policy: https://www.cloudflare.com/privacypolicy/
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li><strong>Emailing</strong></li>
                            </ul>
                            <p className='ml-8'>
                                Resend - for secure emailing.
                                <br/>
                                <br/>
                                Privacy policy: https://resend.com/legal/privacy-policy
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li><strong>Invoice and Billing</strong></li>
                            </ul>
                            <p className='ml-8'>
                                Stripe - for payment handling.
                                <br/>
                                <br/>
                                Privacy policy: https://stripe.com/gb/privacy
                            </p>
                            <p>We also may need to share your personal information in the following situations:</p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li><strong>Business Transfers</strong>. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We may use cookies and other tracking technologies to collect and store your information.
                            </p>
                            <p>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                            </p>
                            <p>
                                We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                            </p>
                            <p>
                                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                            </p>
                            <h3 className='content-subtitle'>Google Analytics</h3>
                            <p>
                                We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a className='text-link text-blue-400' href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy">Google Privacy & Terms page</a>.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className="content-subtitle">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
                            </p>
                            <p>
                                As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, &apos;AI Products&apos;). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
                            </p>
                            <strong>
                                Use of AI Technologies
                            </strong>
                            <p>
                                We provide the AI Products through third-party service providers (&apos;AI Service Providers&apos;), including OpenAI and WinstonAI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in &apos;WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?&apos; You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
                            </p>
                            <strong>
                                Our AI Products
                            </strong>
                            <p>
                                Our AI Products are designed for the following functions:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Text generation</li>
                                <li>Text analysis</li>
                            </ul>
                            <p>
                                How We Process Your Data Using AI
                            </p>
                            <p>
                                All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties.
                                This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data&apos;s safety.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className="content-subtitle">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.
                            </p>
                            <p>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                            </p>
                            <p>
                                Timeframes for certain data processes:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Account data - Retained for duration of active account plus 30 days after deletion</li>
                                <li>Usage logs - Retained for 12 months for security and analytics</li>
                                <li>Payment data: Retained as required by financial regulations (typically 7 years)</li>
                                <li>AI processing data: Deleted within 30 days unless required for service improvement</li>
                            </ul>
                            <p>
                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className="content-subtitle">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We aim to protect your personal information through a system of organisational and technical security measures.
                            </p>
                            <p>
                                We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className="content-subtitle">9. DO WE COLLECT INFORMATION FROM MINORS?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: We do not knowingly collect data from or market to children under 18 years of age.
                            </p>
                            <p>
                                We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at privacy@heimdallqc.com.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>10. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
                            <p className='italic'>
                                <strong>In Short</strong>: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                            </p>
                            <p>
                                In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (i) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below.
                            </p>
                            <p>
                                We will consider and act upon any request in accordance with applicable data protection laws.
                            </p>
                            <p>
                                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
                            </p>
                            <p>
                                If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                            </p>
                            <p>
                                <strong className='underline'>Withdrawing your consent</strong>: If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below.
                            </p>
                            <p>
                                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                            </p>
                            <h3 className='content-subtitle'>Account Information</h3>
                            <p>
                                If you would at any time like to review or change the information in your account or terminate your account, you can:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Log in to your account settings and update your user account.</li>
                                <li>Contact us using the contact information provided.</li>
                            </ul>
                            <p>
                                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
                                However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                            </p>
                            <p>
                                If you have questions or comments about your privacy rights, you may email us at privacy@heimdallqc.com.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
                            <p>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>12. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
                            <p>
                                In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                            </p>
                            <p>
                                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
                            <p>
                                If you have questions or comments about this notice, you may email us at privacy@heimdallqc.com or contact us by post at:
                            </p>
                            <ul>
                                <li>HEIMDALL QC LTD</li>
                                <li>111 Hillingdon road</li>
                                <li>Bexleyheath</li>
                                <li>DA7 6LN</li>
                                <li>United Kingdom</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
                            <p>
                                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            {/* TERMS OF SERVICE */}
            <Section id="terms" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRIVACY</span> — T&Cs
                    </h3>
                    <h2 className="content-title text-6xl">Our Terms of Service</h2>
                    <div className='mt-16 content-body text-base text-start section-container-sm bento-card flex flex-col gap-12'>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>AGREEMENT TO OUR LEGAL TERMS</h3>
                            <p>
                                We are Heimdall QC (&apos;<strong>Company</strong>&apos;, &apos;<strong>we</strong>&apos;, &apos;<strong>us</strong>&apos;, or &apos;<strong>our</strong>&apos;).
                            </p>
                            <p>
                                We operate the website <a className='text-link text-blue-400' href="https://www.heimdallqc.com">https://www.heimdallqc.com</a> (the &apos;<strong>Site</strong>&apos;), as well as any other related products and services that refer or link to these legal terms (the &apos;<strong>Legal Terms</strong>&apos;) (collectively, the &apos;<strong>Services</strong>&apos;).
                            </p>
                            <p>
                                An automated end-to-end quality control service, which identifies and takes action on suspected plagiarism and problematic content.
                            </p>
                            <p>
                                You can contact us by phone at 07585330551, email at info@heimdallqc.com, or by mail to 111 Hillingdon road, Bexleyheath, DA7 6LN, United Kingdom.
                            </p>
                            <p>
                                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&apos;you&apos;), and Heimdall QC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                            </p>
                            <p>
                                Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time.
                                We will alert you about any changes by updating the &apos;Last updated&apos; date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                            </p>
                            <p>
                                The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                            </p>
                            <p>
                                We recommend that you print a copy of these Legal Terms for your records.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>1. OUR SERVICES</h3>
                            <p>
                                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                            </p>
                            <p>
                                The Services are primarily designed for users in the United Kingdom and European Union. 
                                Users from other jurisdictions may access the Services but acknowledge that our data 
                                protection and compliance measures are optimized for UK/EU regulations.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>2. SERVICE LIMITATIONS AND AI ACCURACY</h3>
                            <p>
                                Our AI-powered content verification and plagiarism detection services are provided as tools to assist in quality control but are not infallible. You acknowledge and agree that:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Our (and our 3rd party) AI analysis and plagiarism detection do not guarantee 100% accuracy</li>
                                <li>False positives and false negatives may occur</li>
                                <li>The service should be used as part of a broader quality control process, not as the sole determinant</li>
                                <li>Final editorial and content decisions remain your responsibility</li>
                                <li>We do not warrant that all plagiarism or problematic content will be detected</li>
                                <li>The effectiveness may vary depending on content type, language, and source material availability</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>3. INTELLECTUAL PROPERTY RIGHTS</h3>
                            <strong>
                                Our intellectual property
                            </strong>
                            <p>
                                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &apos;Content&apos;), as well as the trademarks, service marks, and logos contained therein (the &apos;Marks&apos;).
                            </p>
                            <p>
                                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
                            </p>
                            <p>
                                The Content and Marks are provided in or through the Services &apos;AS IS&apos; for your personal, non-commercial use or internal business purpose only.
                            </p>
                            <strong>
                                Your use of our Services
                            </strong>
                            <p>
                                Subject to your compliance with these Legal Terms, including the &apos;PROHIBITED ACTIVITIES&apos; section below, we grant you a non-exclusive, non-transferable, revocable licence to:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>access the Services; and</li>
                                <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
                            </ul>
                            <p>
                                solely for your personal, non-commercial use or internal business purpose.
                            </p>
                            <p>
                                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                            </p>
                            <p>
                                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: info@heimdallqc.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                            </p>
                            <p>
                                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                            </p>
                            <p>
                                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                            </p>
                            <strong>
                                Your submissions
                            </strong>
                            <p>
                                Please review this section and the &apos;PROHIBITED ACTIVITIES&apos; section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                            </p>
                            <p>
                                <strong>Submissions</strong>: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&apos;Submissions&apos;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                            </p>
                            <p>
                                <strong>You are responsible for what you post or upload</strong>: By sending us Submissions through any part of the Services you:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>confirm that you have read and agree with our &apos;PROHIBITED ACTIVITIES&apos; and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                                <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                                <li>warrant that any such Submission are original to you or that you have the necessary rights and licences to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                                <li>warrant and represent that your Submissions do not constitute confidential information.</li>
                            </ul>
                            <p>
                                You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party&apos;s intellectual property rights, or (c) applicable law.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>4. USER REPRESENTATIONS</h3>
                            <p>
                                By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorised purpose; and (7) your use of the Services will not violate any applicable law or regulation.
                            </p>
                            <p>
                                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>5. USER REGISTRATION</h3>
                            <p>
                                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>6. PURCHASES AND PAYMENT</h3>
                            <p>
                                We accept the following forms of payment:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Visa</li>
                                <li>Mastercard</li>
                                <li>American Express</li>
                                <li>PayPal</li>
                                <li>Discover</li>
                            </ul>
                            <p>
                                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in GBP.
                            </p>
                            <p>
                                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                            </p>
                            <p>
                                We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers, or distributors.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>7. SUBSCRIPTIONS</h3>
                            <strong>
                                Billing and Renewal
                            </strong>
                            <p>
                                Your subscription will continue and automatically renew unless cancelled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle is monthly.
                            </p>
                            <strong>
                                Free Trial
                            </strong>
                            <p>
                                We offer a 7-day free trial to new users who register with the Services. The account will be charged according to the user&apos;s chosen subscription at the end of the free trial.
                            </p>
                            <strong>
                                Cancellation
                            </strong>
                            <p>
                                You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term (30 days from previous renewal). If you have any questions or are unsatisfied with our Services, please email us at info@heimdallqc.com.
                            </p>
                            <strong>
                                Plan change
                            </strong>
                            <p>
                                You may change your plan at any point, the prorated cost difference will be added to/subtracted from the next billing cycle.
                            </p>
                            <strong>
                                Refunds
                            </strong>
                            <p>
                                In certain circumstances, we will provide a refund once you have contacted us and we have deemed the refund appropriate.
                            </p>
                            <strong>
                                Fee Changes
                            </strong>
                            <p>
                                We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>8. SOFTWARE</h3>
                            <p>
                                We may include software for use in connection with our Services. If such software is accompanied by an end user licence agreement (&apos;EULA&apos;), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable licence to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation is provided &apos;AS IS&apos; without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any software. You may not reproduce or redistribute any software except in accordance with the EULA or these Legal Terms.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>9. PROHIBITED ACTIVITIES</h3>
                            <p>
                                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
                            </p>
                            <p>
                                As a user of the Services, you agree not to:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                                <li>Engage in unauthorised framing of or linking to the Services.</li>
                                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&apos;gifs&apos;), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &apos;spyware&apos; or &apos;passive collection mechanisms&apos; or &apos;pcms&apos;).</li>
                                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                                <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                                <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other software.</li>
                                <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                                <li>Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.</li>
                                <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
                                <li>Sell or otherwise transfer your profile.</li>
                                <li>Use the Services to advertise or offer to sell goods and services.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>10. API TERMS</h3>
                            <p>
                                When integrating our Services via the API, you agree to the following:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>Abusing the limits of our API usage rates can result in suspension of your account, and potentially the loss of your data.</li>
                                <li>You will protect your API keys, sharing your keys may result in suspension of your account.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>11. USER GENERATED CONTRIBUTIONS</h3>
                            <p>
                                The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &apos;Contributions&apos;).
                            </p>
                            <p>
                                Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services&apos; Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
                            </p>
                            <ul className='list-disc ml-8 flex flex-col gap-2'>
                                <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                                <li>You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                                <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                                <li>Your Contributions are not false, inaccurate, or misleading.</li>
                                <li>Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                                <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).</li>
                                <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                                <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                                <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                                <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                                <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or wellbeing of minors.</li>
                                <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                                <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
                            </ul>
                            <p>
                                Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>12. CONTRIBUTION LICENCE</h3>
                            <p>
                                You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                            </p>
                            <p>
                                By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                            </p>
                            <p>
                                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>13. THIRD-PARTY WEBSITES AND CONTENT</h3>
                            <p>
                                The Services may contain (or you may be sent via the Site) links to other websites (&apos;Third-Party Websites&apos;) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (&apos;Third-Party Content&apos;). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
                                Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>14. SERVICES MANAGEMENT</h3>
                            <p>
                                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>15. PRIVACY POLICY</h3>
                            <p>
                                We care about data privacy and security. Please review our Privacy Policy: <a className='text-link text-blue-400' href="https://www.heimdallqc.com/privacy">https://www.heimdallqc.com/privacy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United Kingdom. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United Kingdom, then through your continued use of the Services, you are transferring your data to the United Kingdom, and you expressly consent to have your data transferred to and processed in the United Kingdom.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>16. TERM AND TERMINATION</h3>
                            <p>
                                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                            </p>
                            <p>
                                If we terinate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>17. MODIFICATIONS AND INTERRUPTIONS</h3>
                            <p>
                                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                            </p>
                            <p>
                                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>18. GOVERNING LAW</h3>
                            <p>
                                These Legal Terms are governed by and interpreted following the laws of the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. Heimdall QC and yourself both agree to submit to the non-exclusive jurisdiction of the courts of
                                -, which means that you may make a
                                claim to defend your consumer protection rights in regards to these Legal Terms in the United Kingdom, or in the EU country in which you reside.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>19. DISPUTE RESOLUTION</h3>
                            <strong>
                                Informal Negotiations
                            </strong>
                            <p>
                                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &apos;Dispute&apos; and collectively, the &apos;Disputes&apos;) brought by either you or us (individually, a &apos;Party&apos; and collectively, the &apos;Parties&apos;), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least
                                days before initiating
                                arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                            </p>
                            <strong>
                                Binding Arbitration
                            </strong>
                            <p>
                                Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be
                                1. The seat, or legal place, or arbitration shall be
                                London, United Kingdom. The language of the
                                proceedings shall be
                                English. The governing law of these Legal Terms shall be substantive law of
                            </p>
                            <strong>
                                Restrictions
                            </strong>
                            <p>
                                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilise class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                            </p>
                            <strong>
                                Exceptions to Informal Negotiations and Arbitration
                            </strong>
                            <p>
                                The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration:
                                (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>20. CORRECTIONS</h3>
                            <p>
                                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>21. DISCLAIMER</h3>
                            <p>
                                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING 
                                FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, 
                                OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>22. LIMITATIONS OF LIABILITY</h3>
                            <p>
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>23. INDEMNIFICATION</h3>
                            <p>
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services.
                                Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>24. USER DATA</h3>
                            <p>
                                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
                            <p>
                                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>26. MISCELLANEOUS</h3>
                            <p>
                                
                                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h3 className='content-subtitle'>27. CONTACT US</h3>
                            <p>
                                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                            </p>
                            <ul>
                                <li>HEIMDALL QC LTD</li>
                                <li>support@heimdallqc.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}
