"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: task, completed: false },
    ]);
    setTask("");
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow"
        />
        <Button
          onClick={addTask}
          variant="outline"
        >
          Add
        </Button>
      </div>

      <div className="space-y-2">
        {tasks.map((t) => (
          <div key={t.id} className="flex items-center space-x-2">
            <Checkbox
              id={`task-${t.id}`}
              checked={t.completed}
              onCheckedChange={() => toggleTask(t.id)}
            />
            <label
              htmlFor={`task-${t.id}`}
              className={`text-sm font-medium leading-none ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {t.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
