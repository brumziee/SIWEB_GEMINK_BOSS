import React from "react";

const NavigationControls = () => {
  return (
    <>
      <button className="absolute right-8 bottom-8" aria-label="Next page">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;47:419&quot; layer-name=&quot;fi-br-angle-double-right&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;next-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <g clip-path=&quot;url(#clip0_47_419)&quot;> <path d=&quot;M11.8317 24.0005C11.535 24.0006 11.2448 23.9127 10.998 23.7479C10.7512 23.5831 10.5589 23.3488 10.4453 23.0746C10.3317 22.8004 10.302 22.4987 10.3599 22.2077C10.4178 21.9166 10.5608 21.6493 10.7707 21.4395L18.4427 13.7685C18.6749 13.5363 18.8591 13.2607 18.9848 12.9573C19.1105 12.654 19.1752 12.3288 19.1752 12.0005C19.1752 11.6721 19.1105 11.347 18.9848 11.0436C18.8591 10.7403 18.6749 10.4646 18.4427 10.2325L10.7707 2.56148C10.6314 2.42215 10.5209 2.25674 10.4455 2.07469C10.3701 1.89264 10.3313 1.69753 10.3313 1.50048C10.3313 1.10253 10.4893 0.720875 10.7707 0.439481C11.0521 0.158086 11.4338 0 11.8317 0C12.0288 0 12.2239 0.0388111 12.4059 0.114217C12.588 0.189624 12.7534 0.300148 12.8927 0.439481L20.5637 8.11148C21.5951 9.14292 22.1745 10.5418 22.1745 12.0005C22.1745 13.4591 21.5951 14.858 20.5637 15.8895L12.8927 23.5615C12.7534 23.7007 12.588 23.8112 12.4059 23.8865C12.2239 23.9618 12.0287 24.0006 11.8317 24.0005Z&quot; fill=&quot;#374957&quot;></path> <path d=&quot;M2.28679 24.0001C1.9901 24.0001 1.7001 23.912 1.45346 23.7471C1.20681 23.5822 1.0146 23.3479 0.901138 23.0738C0.787674 22.7997 0.758052 22.498 0.816018 22.2071C0.873984 21.9161 1.01693 21.6489 1.22679 21.4391L10.3118 12.3541C10.3584 12.3077 10.3953 12.2525 10.4205 12.1918C10.4457 12.131 10.4587 12.0659 10.4587 12.0001C10.4587 11.9344 10.4457 11.8692 10.4205 11.8085C10.3953 11.7478 10.3584 11.6926 10.3118 11.6461L1.22679 2.56113C0.945395 2.27987 0.787257 1.89834 0.787163 1.50048C0.787069 1.10262 0.945028 0.721022 1.22629 0.439627C1.50755 0.158232 1.88908 9.38099e-05 2.28694 4.17235e-08C2.68479 -9.37265e-05 3.0664 0.157865 3.34779 0.439127L12.4338 9.52513C13.0882 10.1824 13.4557 11.0721 13.4557 11.9996C13.4557 12.9271 13.0882 13.8169 12.4338 14.4741L3.34779 23.5611C3.20843 23.7004 3.04301 23.8108 2.86096 23.8862C2.67891 23.9615 2.48381 24.0002 2.28679 24.0001Z&quot; fill=&quot;#374957&quot;></path> </g> <defs> <clipPath id=&quot;clip0_47_419&quot;> <rect width=&quot;24&quot; height=&quot;24&quot; fill=&quot;white&quot;></rect> </clipPath> </defs> </svg>",
          }}
        />
      </button>

      <button className="absolute left-8 bottom-8" aria-label="Previous page">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;46:355&quot; width=&quot;30&quot; height=&quot;30&quot; viewBox=&quot;0 0 30 30&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;prev-icon&quot; style=&quot;width: 28px; height: 28px&quot;> <path d=&quot;M15 1C22.732 1 29 7.26801 29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M16.5556 19.6667L11.8889 15L16.5556 10.3333M29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29C22.732 29 29 22.732 29 15Z&quot; stroke=&quot;white&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
          }}
        />
      </button>
    </>
  );
};

export default NavigationControls;
