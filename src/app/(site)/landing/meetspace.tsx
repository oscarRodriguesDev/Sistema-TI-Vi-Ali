export default function MeetPage() {
  const meetUrl = "https://meet.google.com/auy-jvoh-epa";
  return (
    <div className="h-96 w-96 bg-gray-100">
      <div className="absolute top-24 left-40 w-96 h-96 z-10">
        <iframe
          src="https://meet.jit.si/SeuNomeDeSala"
          width="100%"
          height="100%"
          allow="camera; microphone; fullscreen"
          style={{ border: 'none' }}
        ></iframe>
      </div>

    </div>
  );
}
