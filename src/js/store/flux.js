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
				const example = conf.requestConfig("POST", JSON.stringify(contact));
				console.log(example);
				const createContactResponse = await fetch(
					`https://assets.breatheco.de/apis/fake/contact/agenda/${contactOwner}`,
					conf.requestConfig("POST", JSON.stringify(contact))
				);
				if (createContactResponse.ok) {
					const getAllContactsResponse = await fetch(
						`https://assets.breatheco.de/apis/fake/contact/agenda/${contactOwner}`,
						conf.getRequest
					);
					setStore({
						contactList: getAllContactsResponse
					});
				}
			}

			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
