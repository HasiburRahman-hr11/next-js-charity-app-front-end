
import axios from 'axios';
import { errorNotify, successNotify } from '../../utils/toastify';
import { addNewCaseFailed, addNewCaseStart, addNewCaseSuccess, getAllCasesStart, getAllCasesSuccess, getAllCasesFailed, deleteCaseStart, deleteCaseSuccess, deleteCaseFailed, updateCaseStart, updateCaseSuccess, updateCaseFailed } from './casesActions';
// Add New Case
export const addNewCase = async (dispatch, formData, router) => {
    dispatch(addNewCaseStart());
    try {
        const { data } = await axios.post('http://localhost:8000/cases/add', formData);
        dispatch(addNewCaseSuccess(data));
        successNotify('Case added successfully');
        router.push(`/dashboard/cases/edit/${data._id}`);
    } catch (error) {
        console.log(error);
        dispatch(addNewCaseFailed(error));
        errorNotify('Could not add case')
    }
}

// Get All Cases
export const getAllCases = async (dispatch) => {
    dispatch(getAllCasesStart())
    try {
        const { data } = await axios.get('http://localhost:8000/cases');
        dispatch(getAllCasesSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(getAllCasesFailed(error))
    }
}

// Update Case
export const updateCase = async (dispatch, id, formData) => {
    dispatch(updateCaseStart());
    try {
        const { data } = await axios.put(`http://localhost:8000/cases/${id}`, formData);
        dispatch(updateCaseSuccess(data));
        successNotify('Case updated successfully');
    } catch (error) {
        console.log(error);
        dispatch(updateCaseFailed(error));
        errorNotify('Could not update case')
    }
}

// Delete Case
export const deleteCase = async (dispatch, id) => {
    dispatch(deleteCaseStart());
    try {
        const { data } = await axios.delete(`http://localhost:8000/cases/${id}`);
        dispatch(deleteCaseSuccess(data));
        successNotify('Case deleted successfully');
    } catch (error) {
        console.log(error);
        dispatch(deleteCaseFailed(error));
        errorNotify('Could not delete case')
    }
}