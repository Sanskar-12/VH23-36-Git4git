import React, { useState } from 'react';

const CertificateGenerator = () => {
  const [recipientName, setRecipientName] = useState('');
  const [email, setEmail] = useState('');
  const [duration, setDuration] = useState('');
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const generateCertificate = () => {
    setShowCertificate(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Certificate Generator</h1>
      <form className="bg-white p-7 rounded-lg shadow-md flex flex-col items-center w-[400px]">
        <label htmlFor="recipientName" className="mb-2">
          Recipient's Name:
        </label>
        <input
          type="text"
          id="recipientName"
          className="border rounded py-1 px-2 mb-4"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          required
        />
        <label htmlFor="email" className="mb-2">
          Email Id:
        </label>
        <input
          type="email"
          id="email"
          className="border rounded py-1 px-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="duration" className="mb-2">
          Duration:
        </label>
        <input
          type="text"
          id="duration"
          className="border rounded py-1 px-2 mb-4"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <label htmlFor="eventName" className="mb-2">
          Event Name:
        </label>
        <input
          type="text"
          id="eventName"
          className="border rounded py-1 px-2 mb-4"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <label htmlFor="date" className="mb-2">
          Event Date:
        </label>
        <input
          type="date"
          id="date"
          className="border rounded py-1 px-2 mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={generateCertificate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Generate Certificate
        </button>
      </form>
      {showCertificate && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Certificate of Participation</h2>
          <p className="mb-2">This is to certify that</p>
          <h3 className="text-xl font-bold mb-2">{recipientName}</h3>
          <p className="mb-2">with email address:</p>
          <h3 className="text-xl font-bold mb-2">{email}</h3>
          <p className="mb-2">has participated in the event:</p>
          <h3 className="text-xl font-bold mb-2">{eventName}</h3>
          <p className="mb-2">held on</p>
          <h3 className="text-xl font-bold mb-2">{new Date(date).toLocaleDateString()}</h3>
          <p className="mb-2">for a duration of:</p>
          <h3 className="text-xl font-bold mb-2">{duration}</h3>
        </div>
      )}
    </div>
  );
};

export default CertificateGenerator;
