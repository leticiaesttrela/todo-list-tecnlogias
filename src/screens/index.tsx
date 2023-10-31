import { View, VirtualizedList } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/Header";

export function HomeScreen() {
	return <View style={styles.container}>
		<Header />
		<View style={styles.tasksContainer}>
			<View style={styles.info}>
				<View style={styles.row}>
					<text style={styles.tasksCreated}>Criadas</text>
				<View style={styles.counterContainer}>
					<text style={styles.counterText}>0</text>
				</View>
				</View>
				<View style={styles.row}>
				<text style={styles.tasksDone}>Concluídas</text>
				<View style={styles.counterContainer}>
					<text style={styles.counterText}>0</text>
				</View>
				</View>
			</View>
			<Task />
		</View>
	</View>
}