export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
      <p className="text-red-700 font-medium mt-10">Cargando...</p>
    </div>
  )
}
