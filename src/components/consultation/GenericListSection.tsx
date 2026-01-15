import { LucideIcon } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";

interface GenericListSectionProps<T> {
  title: string;
  icon: LucideIcon;
  items?: T[];
  emptyMessage?: string;
  renderItem: (item: T, index: number) => { title?: string; fields: { label: string; value?: string | number | null }[] };
}

export function GenericListSection<T>({
  title,
  icon,
  items,
  emptyMessage,
  renderItem,
}: GenericListSectionProps<T>) {
  const isEmpty = !items || items.length === 0;

  return (
    <SectionCard
      title={title}
      icon={icon}
      isEmpty={isEmpty}
      emptyMessage={emptyMessage}
    >
      {items && (
        <div className="space-y-4">
          {items.map((item, index) => {
            const rendered = renderItem(item, index);
            return (
              <div
                key={index}
                className={`${index > 0 ? "pt-4 border-t border-divider" : ""}`}
              >
                {rendered.title && (
                  <h4 className="font-semibold text-foreground mb-3">{rendered.title}</h4>
                )}
                <DataGrid columns={3}>
                  {rendered.fields.map((field, fieldIndex) => (
                    <DataField key={fieldIndex} label={field.label} value={field.value} />
                  ))}
                </DataGrid>
              </div>
            );
          })}
        </div>
      )}
    </SectionCard>
  );
}
