const colors = require('./colors')

const { pickColor } = require('./mastermind');

describe('mastermind', () => {
	
	describe('pickColor', () => {
		it('take a random number and return color based on that', () => {
			expect(pickColor(() => 0.1)).toEqual(colors.RED)
			expect(pickColor(() => 0.5)).toEqual(colors.PURPLE)
		});

		[
			{ valueRange: 0.125, color: colors.RED },
			{ valueRange: 0.25, color: colors.GREEN },
			{ valueRange: 0.375, color: colors.YELLOW },
			{ valueRange: 0.5, color: colors.BLUE },
			{ valueRange: 0.625, color: colors.PURPLE },
			{ valueRange: 0.75, color: colors.ORANGE },
			{ valueRange: 0.875, color: colors.PINK },
			{ valueRange: 1.00, color: colors.BROWN }

		].forEach(({ valueRange, color }) => {

			it(`should return ${color} for value in Range of ${valueRange}`, () => {
				expect(pickColor(() => { return valueRange - 0.001 })).toEqual(color)
			})

		})

		it('should throw on function that return more than 1.0', () => {
			expect(() => {
				pickColor(() => 1.0)
			}).toThrow()
		})
	})




});