const SimpleToggle = ({ defaultOn = false }) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      defaultChecked={defaultOn}
      className="sr-only peer"
    />
    <span
      className="
        relative w-11 h-6 rounded-full
        bg-[#E4E4E4]
        peer-checked:bg-[#FFB5C0]
        transition-colors
        after:content-[''] after:absolute after:top-[3px] after:left-[3px]
        after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow
        after:transition-transform
        peer-checked:after:translate-x-5
      "
    />
  </label>
);

export default SimpleToggle