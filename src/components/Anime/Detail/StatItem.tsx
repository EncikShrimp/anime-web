interface Props {
  label: string;
  value: string | number;
  icon: string;
}

const StatItem: React.FC<Props> = ({ label, value, icon }) => (
  <div className="flex items-center mr-6 mb-2">
    <span className="mr-1">{icon}</span>
    <span className="text-sm text-gray-300">{label}:</span>
    <span className="ml-1 text-sm font-medium">{value}</span>
  </div>
);

export default StatItem;
