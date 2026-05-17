type ViewMode = "participating" | "hosting";
interface CompetitionsProps {
 viewMode: ViewMode
}
interface ViewModeModifierComponentProps {
  viewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
}
type HeadingProps = React.HTMLAttributes<HTMLDivElement>;
interface ActiveContainerData {
  name: string,
  active: number,
  max?: number
  icon: string,
}
interface ActiveContainersProps extends ActiveContainerData {
  animationDelay: number;
  className?: string
}
interface PendingActionsDataProps {
  actionIcon: string;
  actionName: string;
  priority: 3 | 2 | 1;
}
interface PendingActionProps
  extends PendingActionsDataProps,
    React.HTMLAttributes<HTMLDivElement> {
  isLast: boolean;
}
interface ActivitiesDataProps {
  icon: string;
  details: string;
  when: string;
  actionUserAvatar: string;
}
interface RecentActivityProps extends ActivitiesDataProps, React.HTMLAttributes<HTMLDivElement> {
  isLast: boolean;
}