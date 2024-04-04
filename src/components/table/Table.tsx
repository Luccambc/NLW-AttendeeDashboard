interface TableProps extends CompontentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="w-full border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  );
}
