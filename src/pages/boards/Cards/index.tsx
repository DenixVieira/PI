import { useDraggable } from "@dnd-kit/core"
import { MdOutlineAccessTime, MdOutlineCancel, MdOutlineArchive, MdOutlineFileOpen } from "react-icons/md"


import type { TaskT } from "../types"

interface TaskProps {
  task: TaskT
  columnId: any
}

const Card = ({ columnId, task }: TaskProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: { columnId },
  })

  const {
    protocolo,
    solicitante,
    titulo,
    prioridade,
    image,
    alt,
    tags,
  } = task

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-white p-3 mb-3 rounded shadow-lg w-full cursor-default overflow-hidden border-[2px]"
    >
      {/* Alça de arrastar */}
      <div
        {...listeners}
        className="cursor-grab touch-none mb-2 flex gap-1 text-gray-500 bg-gray-100 rounded-lg flex-col"
        title="Segure e arraste"
      >
        <div className="w-full flex justify-between">
          <span className="text-[15.5px] text-[#1e40af] break-words line-clamp-1">
            {titulo}
          </span>
          <span
            className={`px-2 py-[2px] text-[12px] rounded-3xl font-medium text-white font-bold
            ${prioridade === "Alta"
                ? "bg-[#ff6900] "
                : prioridade === "Media"
                  ? "bg-[#f0b100]"
                  : "bg-[#00c950]"
              }`}
          >
            {prioridade}
          </span>

        </div>
        <span className="text-[13.5px] text-gray-500 break-words">
          {solicitante} #{protocolo}
        </span>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <span
              key={tag.title}
              className="px-[10px] py-[2px] text-[13px] font-medium rounded-md whitespace-nowrap"
              style={{
                backgroundColor: tag.bg,
                color: tag.text,
              }}
            >
              {tag.title}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full border border-dashed my-2"></div>

      {/* Rodapé */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <MdOutlineAccessTime color="#666" size={18} />
          <span className="text-[13px] text-gray-700">mins</span>
        </div>
        <div className="flex w-[90px] h-[30px] p-1 justify-between">
          <button className="p-0.5 group hover:bg-[#1e40af]/70 rounded-lg">
            <MdOutlineFileOpen className="text-black group-hover:text-white" />
          </button>
          <button className="p-0.5 group hover:bg-[#1e40af]/70 rounded-lg">
            <MdOutlineArchive className="text-black group-hover:text-white"/>
          </button>
          <button className="p-0.5 group hover:bg-[#1e40af]/70 rounded-lg">
            <MdOutlineCancel className="text-black group-hover:text-white"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card