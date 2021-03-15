import * as conf from "./Requests";
const getState = ({ getStore, setStore }) => {
	const contactOwner = "mily_agenda";

	return {
		store: {
			contactList: [],
			contactDetail: {},
			newContact: {}
		},
		actions: {
			getContactList: async () => {
				const response = await fetch(
					`https://assets.breatheco.de/apis/fake/contact/agenda/${contactOwner}`,
					conf.getRequest
				);
				const json = await response.json();
				setStore({ contactList: json });
			},
			getContactById: async id => {
				const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, conf.getRequest);
				const json = await response.json();
				setStore({ contactDetail: json });
			},
			addNewContact: async contact => {
				const createContactResponse = await fetch(
					"https://assets.breatheco.de/apis/fake/contact/",
					conf.requestConfig("POST", contact)
				);
			},
			updateContact: async (id, contactToUpdate) => {
				const response = await fetch(
					`https://assets.breatheco.de/apis/fake/contact/${id}`,
					conf.requestConfig("PUT", contactToUpdate)
				);
				if (response.ok) {
					return true;
				}
				return false;
			}

			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
