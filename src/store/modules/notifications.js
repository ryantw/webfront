export const namespaced = true;

export const state = {
  notifications: [
    { id: 0, type: 'is-danger', message: 'Ticking time bomb awaits every day.' },
    { id: 1, type: 'is-info', message: 'Well this is some bullshit.'},
    { id: 2, type: 'is-primary', message: 'Guess the kids are going to spend all my money!'}
  ],
  showNoticeIndex: 0,
  numberNotifications: 0
};

export const mutations = {
  ADD_NOTICE(state, notice) {
    state.notifications.push(notice);
    state.numberNotifications++;
    notice.id = state.numberNotifications;
    state.showNoticeIndex = state.notifications.length - 1;
  },
  REMOVE_NOTICE(state, index){
    if(index < 0 || index > state.notifications.length) return
    state.notifications = state.notifications.slice(0, index).concat(state.notifications.slice(index+1, state.notifications.length))
    state.numberNotifications--;
    state.showNoticeIndex = state.notifications.length - 1;
  },
  SET_INDEX(state, index){
    if(index < 0 || index > state.notifications.length){
      state.showNoticeIndex = 0;
    } else {
      state.showNoticeIndex = index;
    }
  }
};

export const actions = {
  addNotice({commit}, notice){
    commit('ADD_NOTICE', notice);
  },
  removeNotice({commit}, index){
    console.log('remove index: ' + index);
    commit('REMOVE_NOTICE', index);
  },
  setNoticeIndex({commit}, index){
    commit('SET_INDEX', index);
  }
};

export const getters = {
  getNotices: state => {
    return state.notifications;
  },
  getTotalNotices: state => {
    return state.numberNotifications;
  },
  getNoticeAtIndex: state => {
    return state.showNoticeIndex;
  }
};