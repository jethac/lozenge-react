import { Gauge } from "../../src/components/Gauge";

export const meta = { id: "gauge", title: "Gauge" };

export default function GaugeSection() {
  return (
    <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
      <Gauge value={0.41} aria-valuetext="41% used, nominal" aria-label="Session quota used">
        41%
      </Gauge>
      <Gauge value={0.58} fill="neutral" aria-label="Disk used">
        58%
      </Gauge>
      <Gauge value={0.34} fill="success" aria-label="Error budget burnt">
        34%
      </Gauge>
      <Gauge
        value={0.82}
        fill="warning"
        limit={0.9}
        aria-valuetext="82% used, elevated"
        aria-label="Day quota used"
      >
        82%
      </Gauge>
      <Gauge
        value={0.97}
        fill="danger"
        limit={0.9}
        aria-valuetext="97% used, critical"
        aria-label="Rate limit spent"
      >
        97%
      </Gauge>
      <Gauge value={0} aria-label="Month quota used">
        0%
      </Gauge>
      <Gauge unknown aria-label="Week quota: not observed" />
    </div>
  );
}
