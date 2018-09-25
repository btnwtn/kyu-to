// Taken from @bvaughn:
// https://gist.github.com/bvaughn/810d50d6ade25b784728873daabb905e

const createLogger = (backgroundColor, color, enabled) => (
  message,
  ...args
) => {
  if (!enabled) {
    return;
  }

  console.groupCollapsed(
    `%c${message}`,
    `background-color: ${backgroundColor}; color: ${color}; padding: 2px 4px;`,
    ...args
  );
  console.log(
    new Error("stack").stack
      .split("\n")
      .slice(2)
      .join("\n")
  );
  console.groupEnd();
};

export default createLogger;
