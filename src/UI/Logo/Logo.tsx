import cn from "classnames";

import { FormsWrapperProps } from "../FormsWrapper/FormsWrapper";
import s from "./Logo.module.scss";

type LogoProps = FormsWrapperProps;

export const Logo = ({ size }: LogoProps) => {
  const isBig = size === "big";

  return (
    <div
      className={cn(s.LogoWrapper, {
        [s.Big]: isBig,
      })}
    >
      <svg
        width="131"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.988 27V1.8H6.82V27H.988ZM24.177 7.344c1.535 0 2.904.312 4.104.936 1.224.6 2.184 1.536 2.88 2.808.695 1.248 1.044 2.856 1.044 4.824V27h-5.616V16.776c0-1.56-.348-2.712-1.044-3.456-.673-.744-1.633-1.116-2.88-1.116-.889 0-1.692.192-2.412.576-.697.36-1.248.924-1.657 1.692-.384.768-.576 1.752-.576 2.952V27h-5.615V7.632h5.364v5.364l-1.008-1.62a7.174 7.174 0 0 1 2.988-2.988c1.296-.696 2.771-1.044 4.428-1.044ZM49.75 27.432c-1.944 0-3.756-.312-5.436-.936-1.656-.648-3.096-1.56-4.32-2.736a12.846 12.846 0 0 1-2.88-4.14c-.672-1.584-1.008-3.324-1.008-5.22s.336-3.636 1.008-5.22a12.846 12.846 0 0 1 2.88-4.14 12.925 12.925 0 0 1 4.356-2.7c1.656-.648 3.468-.972 5.436-.972 2.184 0 4.152.384 5.904 1.152a11.35 11.35 0 0 1 4.464 3.312l-3.744 3.456c-.864-.984-1.824-1.716-2.88-2.196-1.056-.504-2.208-.756-3.456-.756-1.176 0-2.256.192-3.24.576a7.345 7.345 0 0 0-2.556 1.656 7.792 7.792 0 0 0-1.692 2.556c-.384.984-.576 2.076-.576 3.276 0 1.2.192 2.292.576 3.276a7.792 7.792 0 0 0 1.692 2.556 7.345 7.345 0 0 0 2.556 1.656c.984.384 2.064.576 3.24.576 1.248 0 2.4-.24 3.456-.72 1.056-.504 2.016-1.26 2.88-2.268l3.744 3.456a11.67 11.67 0 0 1-4.464 3.348c-1.752.768-3.732 1.152-5.94 1.152Zm22.495-.144c-2.064 0-3.9-.432-5.508-1.296-1.585-.864-2.844-2.04-3.78-3.528-.913-1.512-1.368-3.228-1.368-5.148 0-1.944.455-3.66 1.367-5.148a9.722 9.722 0 0 1 3.78-3.528c1.609-.864 3.445-1.296 5.509-1.296 2.04 0 3.864.432 5.472 1.296 1.608.84 2.867 2.004 3.78 3.492.911 1.488 1.367 3.216 1.367 5.184 0 1.92-.456 3.636-1.367 5.148-.913 1.488-2.172 2.664-3.78 3.528-1.609.864-3.433 1.296-5.472 1.296Zm0-4.608c.936 0 1.776-.216 2.52-.648a4.643 4.643 0 0 0 1.763-1.836c.433-.816.648-1.776.648-2.88 0-1.128-.216-2.088-.648-2.88a4.643 4.643 0 0 0-1.763-1.836c-.745-.432-1.585-.648-2.52-.648-.936 0-1.776.216-2.52.648-.745.432-1.344 1.044-1.8 1.836-.433.792-.648 1.752-.648 2.88 0 1.104.215 2.064.647 2.88.457.792 1.056 1.404 1.8 1.836.745.432 1.585.648 2.52.648Zm22.69 4.608c-1.825 0-3.469-.408-4.933-1.224a9.377 9.377 0 0 1-3.492-3.492c-.84-1.488-1.26-3.24-1.26-5.256 0-2.04.42-3.804 1.26-5.292.864-1.488 2.028-2.64 3.492-3.456 1.464-.816 3.108-1.224 4.932-1.224 1.632 0 3.06.36 4.284 1.08 1.224.72 2.172 1.812 2.844 3.276.672 1.464 1.008 3.336 1.008 5.616 0 2.256-.324 4.128-.972 5.616-.648 1.464-1.584 2.556-2.808 3.276-1.2.72-2.652 1.08-4.356 1.08Zm.971-4.608c.912 0 1.74-.216 2.484-.648a4.64 4.64 0 0 0 1.764-1.836c.456-.816.684-1.776.684-2.88 0-1.128-.228-2.088-.684-2.88a4.64 4.64 0 0 0-1.764-1.836c-.744-.432-1.572-.648-2.484-.648-.936 0-1.776.216-2.52.648-.744.432-1.344 1.044-1.8 1.836-.432.792-.648 1.752-.648 2.88 0 1.104.216 2.064.648 2.88.456.792 1.056 1.404 1.8 1.836.744.432 1.584.648 2.52.648Zm5.076 4.32v-3.96l.108-5.76-.36-5.724V.288h5.616V27h-5.364Zm20.174.288c-2.208 0-4.152-.432-5.832-1.296-1.656-.864-2.94-2.04-3.852-3.528-.912-1.512-1.368-3.228-1.368-5.148 0-1.944.444-3.66 1.332-5.148a9.529 9.529 0 0 1 3.708-3.528c1.56-.864 3.324-1.296 5.292-1.296 1.896 0 3.6.408 5.112 1.224a8.844 8.844 0 0 1 3.636 3.456c.888 1.488 1.332 3.276 1.332 5.364 0 .216-.012.468-.036.756-.024.264-.048.516-.072.756h-15.732v-3.276h12.78l-2.16.972c0-1.008-.204-1.884-.612-2.628a4.342 4.342 0 0 0-1.692-1.728c-.72-.432-1.56-.648-2.52-.648s-1.812.216-2.556.648a4.286 4.286 0 0 0-1.692 1.764c-.408.744-.612 1.632-.612 2.664v.864c0 1.056.228 1.992.684 2.808a4.872 4.872 0 0 0 1.98 1.836c.864.408 1.872.612 3.024.612 1.032 0 1.932-.156 2.7-.468a6.568 6.568 0 0 0 2.16-1.404l2.988 3.24c-.888 1.008-2.004 1.788-3.348 2.34-1.344.528-2.892.792-4.644.792Z"
          fill="#fff"
        />
      </svg>
      <span className={s.LogoTitle}>Finance</span>
    </div>
  );
};

export default Logo;
