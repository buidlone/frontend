export enum VoteAgainstErrorEnum{
    AMOUNT_ZERO = 'GovernancePool__AmountIsZero',
    NO_TOKENS = 'GovernancePool__NoActiveVotingTokensOwned',
    AMOUNT_IS_GREATER_THAN_BALANCE = 'GovernancePool__AmountIsGreaterThanVotingTokensBalance',
    BAD_STATE = 'GovernancePool__InvestmentPoolStateNotAllowed',
  }