export const TODAY = new Date();
TODAY.setDate(TODAY.getDate())
export const BEFORE_SIX_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() - 6, TODAY.getDate());
export const AFTER_SIX_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() + 6, TODAY.getDate());
export const AFTER_ONE_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, TODAY.getDate());

