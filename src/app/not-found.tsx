import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-section">
      <p className="kicker">Erro 404</p>
      <h1 className="mt-5 max-w-[20ch] text-h2">Esta página não foi encontrada.</h1>
      <Link href="/" className="btn btn-primary mt-10">
        Voltar ao início
      </Link>
    </section>
  );
}
