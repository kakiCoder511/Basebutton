// app/page.tsx
"use client";
import Image from "next/image";
import BaseButton from "@/Components/Basebutton";
import ThemeToggle from "@/Components/ThemeToggle";

const Arrow = () => (
  <Image src="/SystemIcons.svg" alt="" width={24} height={24} aria-hidden />
);

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{children}</div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-8 space-y-8">
        <section className="flex space-x-7">
                <h1 className="text-3xl sm:text-4xl font-bold">Reusable button compontent</h1>

            <ThemeToggle />

      </section>
 <h2 className="text-2xl sm:text-3xl font-bold">Primary button</h2>
      {/* Primary */}
      <section className="space-y-4">
        <Row>
          {/* //lg square*/}
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            icon={<Arrow />}
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            icon={<Arrow />}
            iconPosition="right"
          />
          <BaseButton text="Large" hierarchy="primary" size="lg" />
        </Row>
        {/* //large rounded */}
        <Row>
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="rounded"
            icon={<Arrow />}
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="rounded"
            icon={<Arrow />}
            iconPosition="right"
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="rounded"
          />
        </Row>
        {/* //large circle */}
        <Row>
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="circle"
            icon={<Arrow />}
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="circle"
            icon={<Arrow />}
            iconPosition="right"
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="circle"
          />
        </Row>

        <h2 className="text-2xl sm:text-3xl font-bold">Disabled button</h2>
        {/* //large disabled */}
        <Row>
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            icon={<Arrow />}
            disabled
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            icon={<Arrow />}
            iconPosition="right"
            disabled
          />
          <BaseButton text="Large" hierarchy="primary" size="lg" disabled />
        </Row>
        {/* //large disabled rounded */}
        <Row>
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="rounded"
            icon={<Arrow />}
            disabled
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="rounded"
            icon={<Arrow />}
            iconPosition="right"
            disabled
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            radius="rounded"
            size="lg"
            disabled
          />
        </Row>
        {/* //large disabled circle */}
        <Row>
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="circle"
            icon={<Arrow />}
            disabled
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            size="lg"
            radius="circle"
            icon={<Arrow />}
            iconPosition="right"
            disabled
          />
          <BaseButton
            text="Large"
            hierarchy="primary"
            radius="circle"
            size="lg"
            disabled
          />
        </Row>

         <h2 className="text-2xl sm:text-3xl font-bold">Primary button</h2>

        {/* //medium square*/}
        <Row>
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            icon={<Arrow />}
          />
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            icon={<Arrow />}
            iconPosition="right"
          />
          <BaseButton text="Medium" hierarchy="primary" size="md" />
        </Row>

        {/* //medium rounded */}
        <Row>
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            radius="rounded"
            icon={<Arrow />}
          />
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            radius="rounded"
            icon={<Arrow />}
            iconPosition="right"
          />
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            radius="rounded"
          />
        </Row>
        {/* //medium circle */}

        <Row>
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            radius="circle"
            icon={<Arrow />}
          />
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            radius="circle"
            icon={<Arrow />}
            iconPosition="right"
          />
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            radius="circle"
          />
        </Row>
        <h2 className="text-2xl sm:text-3xl font-bold">Disabled button</h2>

        {/* //medium disabled */}
        <Row>
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            icon={<Arrow />}
            disabled
          />
          <BaseButton
            text="Medium"
            hierarchy="primary"
            size="md"
            icon={<Arrow />}
            iconPosition="right"
            disabled
          />
          <BaseButton text="Medium" hierarchy="primary" size="md" disabled />
        </Row>
      </section>
    </main>
  );
}
