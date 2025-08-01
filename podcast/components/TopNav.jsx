import Layout from "./Layout";

export default function TopNav({ blok }) {
  return (
    <>
      <Layout>
        <div className="flex justify-end items-center text-sm px-6 py-2">
          <span className="mr-6 text-gray-600">{blok.phone_number}</span>
          <button
            href="/contact"
            className="mr-6 text-gray-600 hover:underline"
          >
            {blok.contact_us}
          </button>
          <button
            href="/login"
            className="mr-4 px-4 py-1 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-50"
          >
            {blok.login_text}
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm">
            {blok.language_code} ▼
          </button>
        </div>
      </Layout>
      <hr />
    </>
  );
}
