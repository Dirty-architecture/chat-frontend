import s from "./index.module.scss";
import cn from "@/app/utils/cn.ts";
import type {ISpinIconProps} from "ui/spin-icon/interface.ts";


const SpinIcon = ({
                      paused = false,
                      className,
                      title,
                      children, ...props
                  }: ISpinIconProps) => {

    return (
        <span
            className={cn(s['spin-icon'], paused && s['spin-icon--paused'], className)}
            role={s[title ? 'img' : 'presentation']}
            aria-label={title}
            aria-hidden={title ? undefined : true}
            title={title}
            {...props}
        >
      <span className={s["spin-icon__svg"]} aria-hidden="true">
        {children}
      </span>
    </span>
    );
};

export default SpinIcon;
