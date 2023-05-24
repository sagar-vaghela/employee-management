import Nav from "@/components/NavBar/Nav";
import LeaveRequest from "./leave-request";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Nav />
      <LeaveRequest />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
    </>
  );
}
