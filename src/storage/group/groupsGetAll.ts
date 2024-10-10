import AsyncStorage from "@react-native-async-storage/async-storage";

import {GROUP_COLLECTION} from "@storage/storageConfig";

export async function groupsGetAll() {
	try {
		/* Buscando os dados no AsyncStorage */
		const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

		/* Convertendo os dados para objetos. Fazendo a verificação se existe conteúdo e não retorna vazio. */
		const groups: string[] = storage ? JSON.parse(storage) : [];
		return groups

	} catch (error) {
		throw error;
	}
}
