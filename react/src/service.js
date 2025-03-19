import apiClient from './axiosConfig';


export default {
  getTasks: async () => {
    const result = await apiClient.get(`/`)    
    return result.data;
  },

  addTask: async(name)=>{
    const result = await apiClient.post(`/`, {name, isComplete: false})
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    const task = await apiClient.put(`/${id}`, {isComplete})  
    console.log('setCompleted', {id, isComplete})
    //TODO
    return task.data;
  },

  deleteTask:async(id)=>{
    await apiClient.delete(`/${id}`)
    console.log('deleteTask')
  }
};
