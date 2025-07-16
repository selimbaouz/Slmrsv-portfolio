import LegalPage from "@/components/LegalPage";
import { Suspense } from "react";

 type Props = {
  params: Promise<{ handle: string }>
}

export default async function LegalsPage(props: Props) {
  const params = await props.params;
  return (
    <Suspense>
      <div className="space-y-24 py-24 lg:space-y-44 whitespace-pre-line">
        <LegalPage handle={params.handle} />
      </div>
    </Suspense>
  );
}
