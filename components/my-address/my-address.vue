<template>
	<view>
		<!-- 收货地址盒子 -->
		<view class="address-choose-box" v-if="JSON.stringify(address) === '{}'">
			<button type="primary" size="mini" class="btnChooseAddress" @click="chooseAddress">请选择收货地址</button>
		</view>
		<!-- 渲染收货信息 -->
		<view class="address-info-box" v-else @click="chooseAddress">
			<view class="person">
				<view class="person-left">
					<view class="username">
						收货人: <text>{{address.userName}}</text>
					</view>
				</view>
				<view class="person-right">
					<view class="phone">
						电话: <text>{{address.telNumber}}</text>
						<uni-icons type="arrowright" size="16"></uni-icons>
					</view>
				</view>
			</view>
			<!-- 收货地址 -->
			<view class="address">
				<view class="address-left">
					收货地址:
				</view>
				<view class="address-right">
					{{addstr}}
				</view>
			</view>
		</view>
		<!-- 底部边框线 -->
		<hr>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from "vuex"


	export default {
		name: "my-address",
		data() {
			return {
				// address: {}
			};
		},
		computed: {
			...mapState("user", ["address", ]),
			...mapGetters("user", ["addstr", ])
		},
		methods: {
			async chooseAddress() {
				const [err, succ] = await uni.chooseAddress().catch(err => err)
				console.log(succ);
				if (err === null && succ.errMsg === "chooseAddress:ok") {
					// this.address = succ
					this.updateAddress(succ)
				}
			},
			...mapMutations("user", ["updateAddress"])
		}
	}
</script>

<style lang="scss">
	.address-choose-box {
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// 渲染收货信息盒子
	.address-info-box {
		font-size: 12px;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 5px;

		//  第一行
		.person {
			display: flex;
			justify-content: space-between;

			.person-right {
				display: flex;
				align-items: center;

				.phone {
					margin-right: 5px;
				}
			}
		}

		// 第二行
		.address {
			display: flex;
			align-items: center;
			margin-top: 10px;

			.address-right {
				white-space: nowrap;
			}

		}
	}
</style>
