import { Accordion, AccordionPanel } from "../../src/components/Accordion";

export const meta = { id: "accordion", title: "Accordion" };

export default function AccordionSection() {
  return (
    <div className="d-flex gap-4" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
      {/* Exclusive group: same name on every panel, first one open */}
      <Accordion style={{ flex: "1 1 320px" }}>
        <AccordionPanel name="faq" open header="What is Lozenge?">
          <p>A zero-JS HTML+CSS design system.</p>
        </AccordionPanel>
        <AccordionPanel name="faq" header="Does it need a runtime?">
          <p>No — platform primitives only.</p>
        </AccordionPanel>
        <AccordionPanel name="faq" header="How do exclusive panels work?">
          <p>
            Every panel shares the same <code>name</code> attribute, so the
            platform closes the others when one opens.
          </p>
        </AccordionPanel>
      </Accordion>

      {/* Independent panels: no name, several may stay open at once */}
      <Accordion style={{ flex: "1 1 320px" }}>
        <AccordionPanel open header="Independent panel A">
          <p>No <code>name</code> attribute — this panel opens independently.</p>
        </AccordionPanel>
        <AccordionPanel open header="Independent panel B">
          <p>Both A and B can be open at the same time.</p>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
