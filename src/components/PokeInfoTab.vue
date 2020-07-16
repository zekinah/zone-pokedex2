<template>
    <v-container>
        <v-col cols="12" sm="12" lg="12">
            <v-row justify="center">
                <v-tabs class="title font-weight-medium" grow>
                    <v-tab>About</v-tab>
                    <v-tab>Stats</v-tab>
                    <v-tab>Moves</v-tab>
                    <!--Information-->
                    <v-tab-item class="pokemon__tab-items">
                        <v-card flat>
                            <v-card-text>
                                <div class="pokemon-description mt-3">
                                    <p class="body-2">
                                        {{ description }}
                                    </p>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <!--Profile-->
                    <v-tab-item>
                        <v-card flat>
                        <v-card-text>
                            <div class="pokemon__stats my-4">
                            <div
                                class="pokemon-data font-weight-medium mt-3"
                                v-for="st in data.stats"
                                :key="st.stat.name + '-label'"
                            >
                                <div
                                class="d-flex justify-space-between body-1 border-bottom"
                                >
                                <span class="text-capitalize">{{ st.stat.name }}</span>
                                <span>{{ st.base_stat }}</span>
                                </div>
                                <v-divider></v-divider>
                            </div>
                            </div>
                        </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <!--Moves-->
                    <v-tab-item>
                        <v-card flat>
                        <v-card-text>
                            <v-chip
                            class="ma-2 chip-moves"
                            color="blue-grey darken-4"
                            dark
                            v-for="m in data.moves"
                            :key="m.move.name"
                            >{{ m.move.name }}</v-chip
                            >
                        </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-row>
        </v-col>
    </v-container>
</template>
<script>
export default {
  name: "PokeInfoCard",
  props: ["description","data"],
};
</script>