import { useDraggable } from "@dnd-kit/core"
import { MdOutlineAccessTime, MdDragIndicator } from "react-icons/md"

import type { TaskT } from "../../types"

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
      className="bg-white p-3 mb-3 rounded shadow w-full cursor-default overflow-hidden"
    >
      {/* Alça de arrastar */}
      <div
        {...listeners}
        className="cursor-grab mb-2 flex items-center gap-1 text-gray-500 bg-gray-100 rounded-lg"
        title="Segure e arraste"
      >
        <MdDragIndicator size={20} />
        Arrastar
      </div>

      {/* Imagem */}
      {image && alt && (
        <img
          src={image}
          alt={alt}
          className="w-full h-[170px] rounded-lg object-cover mb-2"
        />
      )}

      {/* Informações principais */}
      <div className="w-full flex flex-col">
        <span className="text-[15.5px] font-semibold text-[#555] break-words line-clamp-2">
          {titulo}
        </span>

        <span className="text-[13.5px] text-gray-500 break-words">
          {solicitante} #{protocolo}
        </span>
      </div>

      {/* Tags */}
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

      {/* Divisor */}
      <div className="w-full border border-dashed my-2"></div>

      {/* Rodapé */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <MdOutlineAccessTime color="#666" size={18} />
          <span className="text-[13px] text-gray-700">mins</span>
        </div>

        {/* Prioridade */}
        <span
          className={`px-2 py-[2px] text-[12px] rounded-md font-medium
          ${
            prioridade === "Alta"
              ? "bg-red-100 text-red-600"
              : prioridade === "Media"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {prioridade}
        </span>
      </div>
    </div>
  )
}

export default Card