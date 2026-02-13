type CnPrimitive = string | number | boolean | null | undefined;
type CnObject = Record<string, unknown>;
type CnInput = CnPrimitive | CnObject | CnInput[];

/**
 * Small `classnames`-like helper.
 *
 * Examples:
 *   cn('a', undefined, 'b') -> "a b"
 *   cn(['a', ['b', false && 'c']]) -> "a b"
 *   cn({ a: true, b: 0, c: 'yes' }) -> "a c"
 *   cn('btn', { active: isActive }) -> "btn active"
 */
const cn = (...args: CnInput[]): string => {
    const out: string[] = [];

    const push = (value: unknown): void => {
        if (!value) return;

        if (typeof value === "string") {
            const s = value.trim();
            if (s) out.push(s);
            return;
        }

        if (typeof value === "number") {
            // include non-zero numbers (0 is falsy and already filtered out)
            out.push(String(value));
            return;
        }

        if (Array.isArray(value)) {
            for (const item of value) push(item);
            return;
        }

        if (typeof value === "object") {
            for (const [key, v] of Object.entries(value as CnObject)) {
                if (v) out.push(key);
            }
        }
    };

    for (const arg of args) push(arg);

    // also dedupe extra spaces if someone passed "a   b"
    return out.join(" ").replace(/\s+/g, " ").trim();
}

export default cn;