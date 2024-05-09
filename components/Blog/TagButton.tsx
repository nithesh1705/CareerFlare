const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <p
      className="bg-gray-light mb-3 mr-3 whitespace-nowrap inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
    >
      {text}
    </p>
  );
};

export default TagButton;