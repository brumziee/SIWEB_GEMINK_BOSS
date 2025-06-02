import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import CreateTransactionForm from "@/app/ui/adminpage/transaksi/createtransaksiform";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Transaksi", href: "/adminpage/transaksi" },
          { label: "Buat Transaksi", href: "/adminpage/transaksi/create", active: true },
        ]}
      />
      <CreateTransactionForm />
    </main>
  );
}
