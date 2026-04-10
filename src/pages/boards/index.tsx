import {
  DndContext,
  useDroppable,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";

import { useState } from "react";
import type { Columns } from "./types";
import { Board } from "../../data/board";
import { IoIosAdd } from "react-icons/io";
import Card from "./Cards";

const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  // ✅ SENSORES (MOBILE + DESKTOP)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    })
  );

  const openModal = (columnId: string) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleViewTask = (task: any) => {
    console.log(task);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumnId = active.data.current?.columnId;
    const targetColumnId = over.id;

    if (!sourceColumnId || !targetColumnId) return;
    if (sourceColumnId === targetColumnId) return;

    const card = columns[sourceColumnId].items.find(
      (item: any) => item.id === active.id
    );
    if (!card) return;

    setColumns((prev) => {
      const sourceItems = prev[sourceColumnId].items.filter(
        (item: any) => item.id !== active.id
      );
      const targetItems = [...prev[targetColumnId].items, card];

      return {
        ...prev,
        [sourceColumnId]: { ...prev[sourceColumnId], items: sourceItems },
        [targetColumnId]: { ...prev[targetColumnId], items: targetItems },
      };
    });
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="w-full px-5">
        <h1 className="text-2xl mb-6">Kanban chamados</h1>

        <span className="text-[13px] text-gray-600 mb-3 block">
          Arraste os cards para alterar o status dos chamados
        </span>

        <div className="flex flex-col md:flex-row items-start gap-5 pb-8">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <Column
              key={columnId}
              id={columnId}
              column={column}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default Boards;

const Column = ({ id, column, openModal }: any) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col flex-1 min-w-[250px] mt-4"
    >
      {/* Título da coluna */}
      <h1 className="py-[10px] w-full text-[20px] mb-2 font-semibold">
        {column.name}
      </h1>

      <span className="text-[13px] text-gray-400 mb-3">
        {column.items.length} chamados
      </span>

      {/* Container */}
      <div className="p-3 rounded-lg border-2 border-gray-300">
        {column.items.map((task: any) => (
          <Card key={task.id} columnId={id} task={task} />
        ))}
      </div>
    </div>
  );
};