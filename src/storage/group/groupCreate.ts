import AsyncStorage from "@react-native-async-storage/async-storage"
import {GROUP_COLLECTION} from "@storage/storageConfig";
import {groupsGetAll} from "@storage/group/groupsGetAll";
import {AppError} from "@utils/AppError";

export async function groupCreate(newGroupName: string) {
	try {
		/* Pegando os dados no AsyncStorage */
		const storageGroups = await groupsGetAll();

		/* Verificando se existe um grupo igual */
		const groupAlreadyExists = storageGroups.includes(newGroupName);

		/* Se existe um grupo, retorna uma mensagem... */
		if (groupAlreadyExists) {
			throw new AppError("Já existe um grupo cadastrado com esse nome.");
		}

		/* Convertendo os dados para string*/
		const storage = JSON.stringify([...storageGroups, newGroupName])

		/* Enviando os dados para o AsyncStorage */
		await AsyncStorage.setItem(GROUP_COLLECTION, storage)
	} catch (error) {
		throw error;
	}
}
