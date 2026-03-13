import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core"
import { useState } from "react"
import { Columns } from "../../types"
import { Board } from "../../data/board"
import { IoIosAdd } from "react-icons/io";

const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board)

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over) return

    const sourceColumnId = active.data.current?.columnId
    const targetColumnId = over.id

    if (!sourceColumnId || !targetColumnId) return
    if (sourceColumnId === targetColumnId) return

    const card = columns[sourceColumnId].items.find(
      (item: any) => item.id === active.id
    )
    if (!card) return

    setColumns(prev => {
      const sourceItems = prev[sourceColumnId].items.filter(
        (item: any) => item.id !== active.id
      )
      const targetItems = [...prev[targetColumnId].items, card]

      return {
        ...prev,
        [sourceColumnId]: { ...prev[sourceColumnId], items: sourceItems },
        [targetColumnId]: { ...prev[targetColumnId], items: targetItems },
      }
    })
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* Container responsivo: flex-col em mobile, flex-row em desktop */}
      <div className="w-full flex flex-col md:flex-row items-start gap-5 px-5 pb-8">
        {Object.entries(columns).map(([columnId, column]: any) => (
          <Column key={columnId} id={columnId} column={column} />
        ))}
      </div>
    </DndContext>
  )
}

export default Boards

const Column = ({ id, column }: any) => {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col flex-1 min-w-[250px] p-4 bg-gray-50 rounded-lg shadow-sm bg-white/50"
    >
      <h2 className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] mb-5 font-semibold">
        {column.name}
      </h2>

      {column.items.map((task: any) => (
        <Card key={task.id} id={task.id} columnId={id} item={task} />
      ))}

      <div className="flex cursor-pointer items-center justify-center gap-1 py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] text-[15px] mt-3">
        <IoIosAdd />
      </div>
    </div>
  )
}

const Card = ({ id, columnId, item }: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { columnId },
  })

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white p-3 mb-3 rounded shadow cursor-pointer w-full"
    >
      {item.title}
    </div>
  )
}