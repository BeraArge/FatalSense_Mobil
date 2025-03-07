const BASE_URL = 'http://fetalsense.net/api';

export const API_URLS = {
    LOGIN: `${BASE_URL}/auth/Login`,

    PERSONAL_FORM: `${BASE_URL}/user/Update`,

    UPDATE_PASSWORD: `${BASE_URL}/user/PasswordChange`,

    FORGOT_PASSWORD: `${BASE_URL}/user/ForgotPassword`,

    GET_FETAL_INFO: `${BASE_URL}/fetal/FetalsGet`,

    GET_FETAL_ADD: `${BASE_URL}/fetal/FetalAdded`,
};