import { UpdateTask, DeleteTask } from '@/app/ui/tasks/buttons';
import TaskStatus from '@/app/ui/tasks/status';
import { formatDateToLocal, formatTime } from '@/app/lib/utils/utils';
import { fetchFilteredTasks } from '@/app/lib/tasks/data';
import { fetchProjects } from '@/app/lib/projects/data';
import { fetchEmployees } from '@/app/lib/employees/data';

export default async function TasksTable({
  query,
  currentPage,
}: {
  query: string | undefined | null;
  currentPage: number | undefined | null;
}) {
  const tasks = await fetchFilteredTasks(query, currentPage);
  const employees = await fetchEmployees();
  const projects = await fetchProjects();

  return (
    <div className="w-full p-4">
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-lg bg-white shadow-md p-4 md:pt-0">
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {tasks?.map((task) => {
                const employee = employees.find((e) => e.id === task.who);
                return (
                  <div key={task.id} className="p-4 rounded-lg bg-blue-100 shadow-md">
                    <div className="flex flex-col gap-2 border-b pb-2">
                      <p className="font-semibold text-gray-700">{task.title}</p>
                      <div className="text-xs text-gray-600">
                        <p><span className="font-medium">Start:</span> {formatDateToLocal(task.startdate)}</p>
                        <p><span className="font-medium">End:</span> {formatDateToLocal(task.enddate)}</p>
                      </div>
                      <div className="text-xs text-gray-600">
                        <p><span className="font-medium">Prevision:</span> {formatTime(task.timeprevision)}</p>
                        <p><span className="font-medium">Spent:</span> {formatTime(task.timespend)}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 pt-2">
                      <p><span className="font-medium">What:</span> {task.what}</p>
                      <p><span className="font-medium">How:</span> {task.how}</p>
                      <p><span className="font-medium">Who:</span> {employee?.name}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-xs font-medium text-gray-700">Status: {task.status}</p>
                      <p className="text-xs font-medium text-gray-700">Grade: {task.grade}</p>
                    </div>
                    <div className="flex justify-end mt-2">
                      <UpdateTask id={task.id} />
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Desktop Table View */}
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="bg-blue-100 text-left text-xs font-medium uppercase">
                <tr>
                  {['Edit', 'Title', 'Status', 'Grade', 'Start Date', 'End Date', 'What', 'How', 'Who', 'Prevision', 'Spent', 'Delete'].map((header) => (
                    <th key={header} className="px-1 py-1">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tasks?.map((task) => {
                  const employee = employees.find((e) => e.id === task.who);
                  return (
                    <tr key={task.id} className="hover:bg-gray-300">
                      <td className="px-1 py-1">
                        <UpdateTask id={task.id} />
                      </td>
                      <td className="px-1 py-1 font-sm text-gray-700">{task.title}</td>
                      <td className="px-1 py-1"><TaskStatus status={task.status} /></td>
                      <td className="px-1 py-1 text-center">{task.grade}</td>
                      <td className="px-1 py-1 text-xs text-gray-600">{formatDateToLocal(task.startdate)}</td>
                      <td className="px-1 py-1 text-xs text-gray-600">{formatDateToLocal(task.enddate)}</td>
                      <td className="px-1 py-1 text-xs">{task.what}</td>
                      <td className="px-1 py-1 text-xs">{task.how}</td>
                      <td className="px-1 py-1 text-xs font-medium">{employee?.name}</td>
                      <td className="px-1 py-1 text-xs text-gray-600">{formatTime(task.timeprevision)}</td>
                      <td className="px-1 py-1 text-xs text-gray-600">{formatTime(task.timespend)}</td>
                      <td className="px-1 py-1">
                        <DeleteTask id={task.id} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}
