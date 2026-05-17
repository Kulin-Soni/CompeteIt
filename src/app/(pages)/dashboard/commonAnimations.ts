import type { Easing, ValueKeyframesDefinition } from "motion"

// Fade In animation for components to sync.
const animation = (delay: number): {
  initial: { opacity: ValueKeyframesDefinition | undefined, translateY: ValueKeyframesDefinition | undefined }
  animate: { opacity: ValueKeyframesDefinition | undefined, translateY: ValueKeyframesDefinition | undefined }
  transition: { duration: number, ease: Easing | Easing[] | undefined, delay: number | undefined }
} => {
 return {
  initial: { opacity: 0, translateY: 20 },
  animate: { opacity: 1, translateY: 0 },
  transition: { duration: 0.5, ease: "easeInOut", delay: delay }
}
}
export default animation