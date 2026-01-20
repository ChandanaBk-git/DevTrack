import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        {children}
      </div>
    </>
  );
}
